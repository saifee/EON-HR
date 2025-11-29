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
        { employeeId: '1', name: 'Layla Al Saud', netPay: 12000, allowances: 2000, deductions: 500 },
        { employeeId: '2', name: 'Omar Al Harbi', netPay: 11000, allowances: 1500, deductions: 300 },
      ],
    };
  }
}
