import { Injectable } from '@nestjs/common';

@Injectable()
export class SelfServiceService {
  profile(tenantId: string, employeeId: string) {
    return {
      tenantId,
      employeeId,
      basicInfo: {
        name: 'Layla Al Saud',
        address: 'Riyadh, KSA',
        contact: '+966500000001',
        emergencyContact: { name: 'Aisha Al Saud', phone: '+966500000099' },
        passportNumber: 'P1234567',
        staffId: 'EMP001',
      },
      employment: { position: 'HRBP', department: 'People', status: 'Active' },
    };
  }

  payslips(employeeId: string) {
    return [
      { period: '2024-06', url: 'https://cdn.example.com/payslips/EMP001-2024-06.pdf' },
      { period: '2024-05', url: 'https://cdn.example.com/payslips/EMP001-2024-05.pdf' },
    ];
  }

  leave(employeeId: string) {
    return {
      balance: { annual: 8, sick: 4, unpaid: 10 },
      requests: [
        { id: 'lr1', type: 'Annual', from: '2024-07-15', to: '2024-07-18', status: 'Approved' },
        { id: 'lr2', type: 'Sick', from: '2024-06-05', to: '2024-06-06', status: 'Approved' },
      ],
    };
  }

  attendance(employeeId: string) {
    return {
      summary: { month: { present: 18, absent: 1, late: 2 } },
      timesheets: [
        { date: '2024-07-01', checkIn: '09:02', checkOut: '17:10', totalHours: 8.1 },
        { date: '2024-06-30', checkIn: '08:57', checkOut: '17:00', totalHours: 8.05 },
      ],
    };
  }

  assets(employeeId: string) {
    return [
      { id: 'asset-1', name: 'MacBook Pro', status: 'Assigned', condition: 'Good', notes: 'Return on exit' },
      { id: 'asset-2', name: 'Access Card', status: 'Active', condition: 'Good' },
    ];
  }

  policies() {
    return [
      { id: 'policy-1', title: 'Leave Policy', url: 'https://cdn.example.com/policies/leave.pdf' },
      { id: 'policy-2', title: 'Benefits Handbook', url: 'https://cdn.example.com/policies/benefits.pdf' },
    ];
  }

  expenses(employeeId: string) {
    return [
      { id: 'exp-1', amount: 220, currency: 'SAR', description: 'Taxi - client visit', status: 'Approved' },
      { id: 'exp-2', amount: 120, currency: 'SAR', description: 'Team lunch', status: 'Submitted' },
    ];
  }

  performance(employeeId: string) {
    return {
      history: [
        { cycle: 'H1 2024', rating: 'Exceeds', summary: 'Strong project delivery and mentoring.' },
        { cycle: 'H2 2023', rating: 'Meets', summary: 'Consistent delivery with strong collaboration.' },
      ],
    };
  }

  documents(employeeId: string) {
    return [
      { id: 'doc-1', label: 'Passport', url: 'https://cdn.example.com/docs/passport.pdf' },
      { id: 'doc-2', label: 'Contract', url: 'https://cdn.example.com/docs/contract.pdf' },
    ];
  }
}
