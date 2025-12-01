import { Injectable } from '@nestjs/common';

type Status = 'present' | 'absent' | 'late';
type Source = 'machine' | 'manual' | 'mobile';

interface AttendanceRecord {
  id: string;
  employeeId: string;
  employeeName: string;
  date: string;
  checkIn?: string;
  checkOut?: string;
  totalHours?: number;
  status: Status;
  source: Source;
  notes?: string;
  tenantId: string;
  location?: string;
}

@Injectable()
export class AttendanceService {
  private records: AttendanceRecord[] = [
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
      tenantId: 'demo',
      location: 'Riyadh HQ',
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
      tenantId: 'demo',
    },
    {
      id: 'a3',
      employeeId: 'EMP003',
      employeeName: 'Sarah Al Qahtani',
      date: '2024-07-01',
      status: 'absent',
      source: 'manual',
      notes: 'On approved leave',
      tenantId: 'demo',
    },
  ];

  list(tenantId: string): AttendanceRecord[] {
    return this.records.filter((record) => record.tenantId === tenantId);
  }

  summary(tenantId: string, range: 'week' | 'month' | 'year' = 'month') {
    const scoped = this.list(tenantId);
    const base = scoped.reduce(
      (acc, record) => {
        if (record.status === 'absent') acc.absent += 1;
        if (record.status === 'present') acc.present += 1;
        if (record.status === 'late') acc.late += 1;
        acc.overtimeHours += record.totalHours && record.totalHours > 8 ? record.totalHours - 8 : 0;
        return acc;
      },
      { absent: 0, present: 0, late: 0, overtimeHours: 0 },
    );

    const ranges = {
      week: base,
      month: base,
      year: base,
    } as const;

    return { tenantId, ranges, range, stats: ranges[range] };
  }

  overtimePolicies() {
    return [
      { code: 'weekday_ot', rateMultiplier: 1.5, description: 'Weekday overtime after 8 hours' },
      { code: 'weekend_ot', rateMultiplier: 2, description: 'Weekend overtime all hours' },
    ];
  }

  checkIn(payload: { tenantId: string; employeeId: string; employeeName: string; source: Source; location?: string }) {
    const id = `a${this.records.length + 1}`;
    const today = new Date();
    const date = today.toISOString().slice(0, 10);
    const record: AttendanceRecord = {
      id,
      tenantId: payload.tenantId,
      employeeId: payload.employeeId,
      employeeName: payload.employeeName,
      source: payload.source,
      date,
      checkIn: `${today.getHours().toString().padStart(2, '0')}:${today.getMinutes().toString().padStart(2, '0')}`,
      status: 'present',
      notes: payload.location ? `Location: ${payload.location}` : undefined,
      location: payload.location,
    };
    this.records.push(record);
    return record;
  }

  checkOut(id: string, notes?: string) {
    const record = this.records.find((item) => item.id === id);
    if (!record) return null;
    const now = new Date();
    record.checkOut = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    if (record.checkIn) {
      const [h, m] = record.checkIn.split(':').map(Number);
      const duration = now.getHours() + now.getMinutes() / 60 - (h + m / 60);
      record.totalHours = Math.round(duration * 100) / 100;
      record.status = record.totalHours < 8 ? 'late' : 'present';
    }
    if (notes) record.notes = notes;
    return record;
  }
}
