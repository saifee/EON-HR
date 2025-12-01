const widgets = [
  { title: 'Headcount', value: '218', trend: '+3% QoQ' },
  { title: 'Turnover', value: '8.2%', trend: '-1.2% YoY' },
  { title: 'Avg Tenure', value: '3.4 yrs', trend: '+0.2 yrs YoY' },
];

const reports = [
  'Departmental attendance and overtime',
  'Payroll cost by department',
  'Employee 360 history',
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-400">Analytics</p>
        <h1 className="text-2xl font-semibold">Advanced & Predictive Analytics</h1>
        <p className="text-sm text-slate-400">Custom dashboards, predictive turnover, and scheduled reporting.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {widgets.map((w) => (
          <div key={w.title} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-sm text-slate-400">{w.title}</p>
            <p className="text-2xl font-semibold">{w.value}</p>
            <p className="text-xs text-emerald-400">{w.trend}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
        <h3 className="text-lg font-semibold">Predictive Insights</h3>
        <p className="text-sm text-slate-400">AI-driven turnover risk, staffing needs, and sentiment analysis.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
        <h3 className="text-lg font-semibold">Scheduled Reports</h3>
        <ul className="list-disc pl-5 text-sm text-slate-300">
          {reports.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
