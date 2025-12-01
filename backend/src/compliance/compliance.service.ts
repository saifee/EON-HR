import { Injectable } from '@nestjs/common';

@Injectable()
export class ComplianceService {
  dashboard() {
    return {
      visaExpiries: [{ employeeId: 'EMP007', name: 'Rakan Al Saud', expiresOn: '2024-08-15', risk: 'High' }],
      gosiAlerts: [{ employeeId: 'EMP002', delta: '-150 SAR', note: 'Mismatch vs policy' }],
      overdueTasks: [{ id: 'task-1', title: 'Probation review', owner: 'Manager', dueDate: '2024-07-05' }],
    };
  }

  hrLetters() {
    return [
      { id: 'letter-1', type: 'Salary Certificate', employeeId: 'EMP001', status: 'Ready' },
      { id: 'letter-2', type: 'Employment Verification', employeeId: 'EMP004', status: 'Pending Signature' },
    ];
  }

  surveys() {
    return [
      { id: 'survey-1', title: 'Engagement Pulse', status: 'Open', responses: 42 },
      { id: 'survey-2', title: 'Onboarding Feedback', status: 'Draft', responses: 0 },
    ];
  }
}
