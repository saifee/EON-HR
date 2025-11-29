import { PayrollTable } from '../dashboard/sections/payroll-table';

export default function PayrollPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-400">Finance</p>
        <h1 className="text-2xl font-semibold">Payroll Engine</h1>
        <p className="text-sm text-slate-400">Preview payroll, allowances, deductions and compliance rules.</p>
      </div>
      <PayrollTable />
    </div>
  );
}
