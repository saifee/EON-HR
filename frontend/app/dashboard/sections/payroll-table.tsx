const lines = [
  { employee: 'Layla Al Saud', net: '12,000', allowances: '2,000', deductions: '500' },
  { employee: 'Omar Al Harbi', net: '11,000', allowances: '1,500', deductions: '300' },
];

export function PayrollTable() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between pb-3">
        <h3 className="text-lg font-semibold">Payroll Preview</h3>
        <span className="text-xs text-slate-400">June 2024</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-400">
            <tr>
              <th className="py-2">Employee</th>
              <th className="py-2">Net</th>
              <th className="py-2">Allowances</th>
              <th className="py-2">Deductions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {lines.map((row) => (
              <tr key={row.employee} className="hover:bg-slate-800/60">
                <td className="py-2">{row.employee}</td>
                <td className="py-2">SAR {row.net}</td>
                <td className="py-2 text-emerald-400">SAR {row.allowances}</td>
                <td className="py-2 text-rose-400">SAR {row.deductions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
