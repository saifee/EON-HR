import { Injectable } from '@nestjs/common';

@Injectable()
export class AttendanceService {
  list(tenantId: string) {
    return [
      { id: 'a1', employeeId: '1', type: 'mobile', status: 'in', timestamp: new Date().toISOString(), tenantId },
      { id: 'a2', employeeId: '2', type: 'manual', status: 'out', timestamp: new Date().toISOString(), tenantId },
    ];
  }
}
