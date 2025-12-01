import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  branding(tenantId: string) {
    return {
      tenantId,
      name: 'Kingslee HR',
      primaryColor: '#0F766E',
      accentColor: '#FDBA74',
      logoUrl: 'https://cdn.example.com/logo.png',
    };
  }

  workSchedules() {
    return [
      { id: 'sched-1', name: 'Standard', hours: '09:00-17:00', applicability: 'Weekdays' },
      { id: 'sched-ramadan', name: 'Ramadan', hours: '10:00-15:00', applicability: 'Ramadan' },
    ];
  }

  departments() {
    return [
      { id: 'dep-1', name: 'People' },
      { id: 'dep-2', name: 'Engineering' },
      { id: 'dep-3', name: 'Finance' },
    ];
  }

  positions() {
    return [
      { id: 'pos-1', name: 'HR Business Partner' },
      { id: 'pos-2', name: 'Software Engineer' },
      { id: 'pos-3', name: 'Finance Analyst' },
    ];
  }

  approvalFlows() {
    return [
      {
        id: 'flow-1',
        name: 'Leave > 5 days',
        levels: [
          { order: 1, role: 'Manager' },
          { order: 2, role: 'Department Head', delayHours: 24 },
          { order: 3, role: 'HR Admin', cascade: true },
        ],
      },
      {
        id: 'flow-2',
        name: 'Expense > SAR 2,000',
        levels: [
          { order: 1, role: 'Manager' },
          { order: 2, role: 'Finance' },
        ],
      },
    ];
  }

  onboardingTemplates() {
    return [
      { id: 'onb-1', name: 'Standard Onboarding', tasks: ['Upload ID', 'Sign Contract', 'Submit bank info'] },
      { id: 'onb-2', name: 'Contractor Onboarding', tasks: ['Upload passport', 'Provide tax status'] },
    ];
  }
}
