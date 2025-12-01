import { Injectable } from '@nestjs/common';
import { ApplyLeaveDto } from './dto/apply-leave.dto';
import { SubmitExpenseDto } from './dto/submit-expense.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UploadDocumentDto } from './dto/upload-document.dto';

@Injectable()
export class EssService {
  getProfile() {
    return {
      employeeId: '104293',
      name: 'Demo User',
      address: 'Riyadh, KSA',
      contacts: [{ type: 'mobile', value: '+966500000000' }, { type: 'email', value: 'demo@kingsleehr.com' }],
      emergencyContacts: [{ name: 'Sara', relation: 'Spouse', phone: '+966501234567' }],
      documents: [{ name: 'Passport', status: 'valid', expiresOn: '2026-02-01' }],
    };
  }

  updateProfile(dto: UpdateProfileDto) {
    return { ...this.getProfile(), ...dto, updatedAt: new Date().toISOString() };
  }

  getPayslips() {
    return [
      { month: 'June 2024', url: '/payslips/2024-06.pdf' },
      { month: 'May 2024', url: '/payslips/2024-05.pdf' },
    ];
  }

  getLeaveBalances() {
    return {
      annual: { balance: 12, pending: 2 },
      sick: { balance: 8, pending: 0 },
      unpaid: { balance: 30, pending: 0 },
    };
  }

  applyLeave(dto: ApplyLeaveDto) {
    return { ...dto, status: 'pending-approval', requestId: 'LV-20240601' };
  }

  getAttendanceSummary() {
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

  getAssets() {
    return [
      { name: 'MacBook Pro', tag: 'ASSET-102', status: 'assigned', warrantyEnd: '2025-12-31' },
      { name: 'iPhone 15', tag: 'ASSET-205', status: 'assigned', warrantyEnd: '2025-06-30' },
    ];
  }

  getPolicies() {
    return [
      { title: 'Code of Conduct', category: 'Compliance', url: '/policies/conduct.pdf' },
      { title: 'Leave Policy', category: 'HR', url: '/policies/leave.pdf' },
      { title: 'Benefits Guide', category: 'Benefits', url: '/policies/benefits.pdf' },
    ];
  }

  getExpenses() {
    return [
      { id: 'EXP-001', amount: 420, category: 'Travel', status: 'approved' },
      { id: 'EXP-002', amount: 120, category: 'Meals', status: 'pending' },
    ];
  }

  submitExpense(dto: SubmitExpenseDto) {
    return { ...dto, id: 'EXP-003', status: 'submitted' };
  }

  getPerformanceHistory() {
    return [
      { period: '2023 Annual', rating: 'Exceeds', reviewer: 'Manager', summary: 'Outstanding delivery and mentorship.' },
      { period: '2022 Annual', rating: 'Meets', reviewer: 'Manager', summary: 'Consistent performance with growth potential.' },
    ];
  }

  getPersonalDocuments() {
    return [
      { id: 'DOC-001', name: 'Iqama', status: 'valid', expiresOn: '2025-03-15' },
      { id: 'DOC-002', name: 'Health Insurance', status: 'valid', expiresOn: '2024-12-31' },
    ];
  }

  uploadDocument(dto: UploadDocumentDto) {
    return { ...dto, id: 'DOC-003', status: 'pending-verification' };
  }
}
