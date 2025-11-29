import { Injectable } from '@nestjs/common';

@Injectable()
export class LeaveService {
  list(tenantId: string) {
    return [
      { id: 'lv1', employeeId: '1', type: 'Annual', status: 'approved', start: '2024-07-01', end: '2024-07-07', approver: 'manager', tenantId },
      { id: 'lv2', employeeId: '2', type: 'Sick', status: 'pending', start: '2024-06-20', end: '2024-06-22', approver: 'manager', tenantId },
    ];
  }
}
