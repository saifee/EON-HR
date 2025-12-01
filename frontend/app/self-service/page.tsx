const sections = [
  { title: 'Personal Info', description: 'Address, contact details, emergency contacts, passport & staff ID' },
  { title: 'Payslips & Taxes', description: 'Download monthly payslips and tax documents' },
  { title: 'Leave', description: 'View balances and submit new leave requests' },
  { title: 'Attendance', description: 'Daily records, timesheets, and check-in/out history' },
  { title: 'Assets', description: 'Assigned assets with statuses and notes' },
  { title: 'Policies & Benefits', description: 'Company policies, benefits, and acknowledgements' },
  { title: 'Expenses', description: 'Submit claims, upload receipts, and track approvals' },
  { title: 'Performance', description: 'Review history, AI summaries, and goals' },
  { title: 'Documents', description: 'Upload personal docs and download official letters' },
];

export default function SelfServicePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-400">Employee Self-Service</p>
        <h1 className="text-2xl font-semibold">My Portal</h1>
        <p className="text-sm text-slate-400">All personal actions in one place with AI assistance.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {sections.map((section) => (
          <div key={section.title} className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-1">
            <h3 className="text-lg font-semibold">{section.title}</h3>
            <p className="text-sm text-slate-400">{section.description}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <h3 className="text-lg font-semibold">AI Compliance Assistant</h3>
        <p className="text-sm text-slate-400">
          Flags visa expiries, GOSI discrepancies, overdue tasks, and suggests payroll adjustments based on overtime, leave, and shift data.
        </p>
      </div>
    </div>
  );
}
