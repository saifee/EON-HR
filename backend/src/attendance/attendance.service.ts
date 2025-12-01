import { Injectable } from '@nestjs/common';

interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn?: string;
  checkOut?: string;
  totalHours?: number;
  status: 'present' | 'absent' | 'late';
  source: 'machine' | 'manual' | 'mobile';
  notes?: string;
}

@Injectable()
export class AttendanceService {
  list(tenantId: string): AttendanceRecord[] {
    return [
      {
        id: 'a1',
        employeeId: 'EMP001',
        employeeName: 'Layla Al Saud',
        date: '2024-07-01',
        checkIn: '09:02',
        checkOut: '17:10',
        totalHours: 8.1,
        status: 'late',
        source: 'mobile',
        notes: 'Geo check-in from Riyadh HQ',
      },
      {
        id: 'a2',
        employeeId: 'EMP002',
        employeeName: 'Omar Al Harbi',
        date: '2024-07-01',
        checkIn: '08:55',
        checkOut: '17:05',
        totalHours: 8.17,
        status: 'present',
        source: 'machine',
      },
      {
        id: 'a3',
        employeeId: 'EMP003',
        employeeName: 'Sarah Al Qahtani',
        date: '2024-07-01',
        status: 'absent',
        source: 'manual',
        notes: 'On approved leave',
      },
    ].map((record) => ({ ...record, tenantId } as AttendanceRecord & { tenantId: string }));
  }

  summary(tenantId: string) {
    return {
      tenantId,
      ranges: {
        month: { absent: 2, present: 20, late: 3, overtimeHours: 14 },
        week: { absent: 0, present: 5, late: 1, overtimeHours: 4 },
        year: { absent: 8, present: 180, late: 14, overtimeHours: 120 },
      },
    };
  }

  overtimePolicies() {
    return [
      { code: 'weekday_ot', rateMultiplier: 1.5, description: 'Weekday overtime after 8 hours' },
      { code: 'weekend_ot', rateMultiplier: 2, description: 'Weekend overtime all hours' },
    ];
  }
}
