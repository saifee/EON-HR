export interface PayrollEmployeeLine {
  employeeId: string;
  name: string;
  netPay: number;
  allowances: number;
  deductions: number;
}

export interface PayrollPreview {
  tenantId: string;
  period: string;
  totals: {
    gross: number;
    net: number;
    deductions: number;
  };
  employees: PayrollEmployeeLine[];
}
