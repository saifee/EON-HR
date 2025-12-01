import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../employees/employee.entity';
import { ApplyLeaveDto } from './dto/apply-leave.dto';
import { SubmitExpenseDto } from './dto/submit-expense.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UploadDocumentDto } from './dto/upload-document.dto';
import { ExpenseClaim } from './entities/expense-claim.entity';
import { LeaveRequest } from './entities/leave-request.entity';
import { PersonalDocument } from './entities/personal-document.entity';

@Injectable()
export class EssService {
  constructor(
    @InjectRepository(Employee) private readonly employeesRepo: Repository<Employee>,
    @InjectRepository(LeaveRequest) private readonly leaveRepo: Repository<LeaveRequest>,
    @InjectRepository(ExpenseClaim) private readonly expenseRepo: Repository<ExpenseClaim>,
    @InjectRepository(PersonalDocument) private readonly personalDocsRepo: Repository<PersonalDocument>,
  ) {}

  private async resolveEmployee() {
    const existing = await this.employeesRepo.find({ take: 1 });
    if (existing.length > 0) return existing[0];

    // fallback profile so the ESS APIs stay useful even without seeded data
    return {
      id: 'demo-employee',
      firstName: 'Demo',
      lastName: 'User',
      email: 'demo@kingsleehr.com',
      address: 'Riyadh, KSA',
      contacts: [
        { type: 'mobile', value: '+966500000000' },
        { type: 'email', value: 'demo@kingsleehr.com' },
      ],
      emergencyContacts: [{ name: 'Sara', relation: 'Spouse', phone: '+966501234567' }],
    } as Employee;
  }

  async getProfile() {
    const employee = await this.resolveEmployee();

    return {
      employeeId: employee.id,
      name: `${employee.firstName} ${employee.lastName}`.trim(),
      email: employee.email,
      address: employee.address,
      contacts: employee.contacts || [],
      emergencyContacts: employee.emergencyContacts || [],
      documents: await this.getPersonalDocuments(),
    };
  }

  async updateProfile(dto: UpdateProfileDto) {
    const employee = await this.resolveEmployee();
    if (employee.id !== 'demo-employee') {
      await this.employeesRepo.save({ id: employee.id, address: dto.address, contacts: dto.contacts, emergencyContacts: dto.emergencyContacts });
    }

    return { ...employee, ...dto, updatedAt: new Date().toISOString() };
  }

  async getPayslips() {
    // Wire up once payroll module is connected; using placeholders for now
    return [
      { month: 'June 2024', url: '/payslips/2024-06.pdf', net: 15200 },
      { month: 'May 2024', url: '/payslips/2024-05.pdf', net: 14950 },
    ];
  }

  async getLeaveBalances() {
    const employee = await this.resolveEmployee();
    const requests = await this.leaveRepo.find({ where: { employeeId: employee.id } });
    const pending = requests.filter((r) => r.status === 'pending-approval').length;

    return {
      annual: { balance: 12, pending },
      sick: { balance: 8, pending: 0 },
      unpaid: { balance: 30, pending: 0 },
    };
  }

  async applyLeave(dto: ApplyLeaveDto) {
    const employee = await this.resolveEmployee();
    const request = this.leaveRepo.create({ ...dto, employeeId: employee.id, status: 'pending-approval' });
    const saved = await this.leaveRepo.save(request);
    return { ...saved, requestId: saved.id };
  }

  async getAttendanceSummary() {
    return {
      month: 'June 2024',
      presentDays: 20,
      absentDays: 1,
      overtimeHours: 6,
      timesheets: [
        { date: '2024-06-17', checkIn: '09:00', checkOut: '18:00', status: 'approved' },
        { date: '2024-06-18', checkIn: '09:30', checkOut: '18:30', status: 'pending' },
      ],
    };
  }

  async getAssets() {
    return [
      { name: 'MacBook Pro', tag: 'ASSET-102', status: 'assigned', warrantyEnd: '2025-12-31' },
      { name: 'iPhone 15', tag: 'ASSET-205', status: 'assigned', warrantyEnd: '2025-06-30' },
    ];
  }

  async getPolicies() {
    return [
      { title: 'Code of Conduct', category: 'Compliance', url: '/policies/conduct.pdf' },
      { title: 'Leave Policy', category: 'HR', url: '/policies/leave.pdf' },
      { title: 'Benefits Guide', category: 'Benefits', url: '/policies/benefits.pdf' },
    ];
  }

  async getExpenses() {
    const employee = await this.resolveEmployee();
    return this.expenseRepo.find({ where: { employeeId: employee.id }, order: { submittedAt: 'DESC' } });
  }

  async submitExpense(dto: SubmitExpenseDto) {
    const employee = await this.resolveEmployee();
    const claim = this.expenseRepo.create({
      employeeId: employee.id,
      amount: dto.amount,
      category: dto.category,
      description: dto.description,
      currency: dto.currency || 'SAR',
      status: 'submitted',
    });
    return this.expenseRepo.save(claim);
  }

  async getPerformanceHistory() {
    return [
      { period: '2023 Annual', rating: 'Exceeds', reviewer: 'Manager', summary: 'Outstanding delivery and mentorship.' },
      { period: '2022 Annual', rating: 'Meets', reviewer: 'Manager', summary: 'Consistent performance with growth potential.' },
    ];
  }

  async getPersonalDocuments() {
    const employee = await this.resolveEmployee();
    return this.personalDocsRepo.find({ where: { employeeId: employee.id }, order: { uploadedAt: 'DESC' } });
  }

  async uploadDocument(dto: UploadDocumentDto) {
    const employee = await this.resolveEmployee();
    const document = this.personalDocsRepo.create({
      employeeId: employee.id,
      name: dto.name,
      fileUrl: dto.fileUrl,
      category: dto.category,
      expiresOn: dto.expiresOn,
      status: 'pending-verification',
    });

    return this.personalDocsRepo.save(document);
  }
}
