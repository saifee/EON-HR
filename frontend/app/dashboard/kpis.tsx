import { ArrowDown, ArrowUp, Clock3, CreditCard, Users } from 'lucide-react';

const kpis = [
  { label: 'Active Employees', value: '218', icon: Users, trend: '+12 MoM', positive: true },
  { label: 'Payroll (Jun)', value: 'SAR 220,000', icon: CreditCard, trend: '-2% vs May', positive: false },
  { label: 'Attendance Compliance', value: '96%', icon: Clock3, trend: '+3% WoW', positive: true },
];

export function DashboardKpis() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {kpis.map((item) => (
        <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">{item.label}</p>
              <p className="text-xl font-semibold">{item.value}</p>
            </div>
            <item.icon className="text-accent" size={20} />
          </div>
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
            {item.positive ? <ArrowUp size={14} className="text-emerald-400" /> : <ArrowDown size={14} className="text-rose-400" />}
            <span>{item.trend}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
