import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  dashboards() {
    return {
      widgets: [
        { id: 'headcount', title: 'Headcount', value: 218, trend: '+3% QoQ' },
        { id: 'turnover', title: 'Turnover Rate', value: '8.2%', trend: '-1.2% YoY' },
        { id: 'avg-tenure', title: 'Average Tenure', value: '3.4 yrs', trend: '+0.2 yrs YoY' },
      ],
      dragAndDropEnabled: true,
    };
  }

  predictive() {
    return {
      turnoverRisk: [
        { employeeId: 'EMP004', name: 'Maha Al Fahad', probability: 0.38, drivers: ['Low engagement', 'High overtime'] },
        { employeeId: 'EMP010', name: 'Yousef Al Mutairi', probability: 0.31, drivers: ['Comp below market'] },
      ],
      staffingNeeds: [
        { department: 'Support', recommendedHires: 3, justification: 'Ticket backlog + projected growth' },
        { department: 'Engineering', recommendedHires: 2, justification: 'New product line' },
      ],
    };
  }

  reports() {
    return {
      attendance: { departments: ['Ops', 'Engineering'], coverage: 'Last 90 days' },
      overtime: { totalHours: 180, topContributors: ['Ops', 'Stores'] },
      payroll: { monthlyCost: 220000, yoyChange: '-2%' },
    };
  }

  employeeHistory(employeeId: string) {
    return {
      employeeId,
      employment: { startDate: '2021-03-01', role: 'HRBP' },
      attendance: { daysPresent: 210, late: 12 },
      performance: [{ cycle: 'H1 2024', rating: 'Exceeds' }],
      leave: [{ type: 'Annual', days: 12, period: '2024' }],
      assets: [{ name: 'MacBook Pro', assigned: '2023-05-01' }],
    };
  }

  scheduledReports() {
    return [
      { id: 'sr1', name: 'Weekly Attendance Exceptions', cadence: 'Weekly', recipient: 'ops@kingslee.app' },
      { id: 'sr2', name: 'Monthly Payroll Cost', cadence: 'Monthly', recipient: 'finance@kingslee.app' },
    ];
  }
}
