import { Injectable } from '@nestjs/common';
import { PayrollPreview } from './types';

@Injectable()
export class PayrollService {
  preview(tenantId: string): PayrollPreview {
    return {
      tenantId,
      period: '2024-06',
      totals: {
        gross: 250000,
        net: 220000,
        deductions: 30000,
      },
      employees: [
        { employeeId: 'EMP001', name: 'Layla Al Saud', netPay: 12000, allowances: 2000, deductions: 500 },
        { employeeId: 'EMP002', name: 'Omar Al Harbi', netPay: 11000, allowances: 1500, deductions: 300 },
      ],
    };
  }

  salaryStructures(tenantId: string) {
    return [
      {
        id: 'structure-1',
        name: 'Standard KSA',
        tenantId,
        components: [
          { label: 'Base Salary', type: 'base', value: 10000 },
          { label: 'Housing Allowance', type: 'allowance', value: 3000 },
          { label: 'Transport Allowance', type: 'allowance', value: 800 },
          { label: 'GOSI', type: 'deduction', value: -750 },
        ],
      },
    ];
  }

  runPayroll(period: string, tenantId: string) {
    return {
      tenantId,
      period,
      status: 'processed',
      payouts: [
        {
          employeeId: 'EMP001',
          netPay: 12800,
          overtimeAdjustment: 600,
          leaveDeductions: -200,
          aiSuggestion: 'Increase transport allowance for late-night shift coverage',
        },
      ],
    };
  }

  payslips(tenantId: string) {
    return [
      {
        employeeId: 'EMP001',
        period: '2024-06',
        url: 'https://cdn.example.com/payslips/EMP001-2024-06.pdf',
        taxSummary: { incomeTax: 0, gosi: 750 },
      },
      {
        employeeId: 'EMP002',
        period: '2024-06',
        url: 'https://cdn.example.com/payslips/EMP002-2024-06.pdf',
        taxSummary: { incomeTax: 0, gosi: 690 },
      },
    ];
  }

  aiAdjustments() {
    return {
      overtimeInsights: 'Detected 22 overtime hours for operations team; recommend SAR 4,200 adjustment.',
      leaveImpact: 'Two employees on extended leave; pro-rate allowances accordingly.',
      shiftSignals: 'Ramadan shift compression detected; reduce standard hours by 1 and auto-adjust overtime multipliers.',
    };
  }
}
