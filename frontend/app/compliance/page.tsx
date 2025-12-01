const complianceCards = [
  { title: 'AI Compliance Monitor', body: 'Flags visa expiries, GOSI mismatches, and overdue tasks automatically.' },
  { title: 'HR Letters', body: 'Generate salary certificates and employment letters with digital signatures.' },
  { title: 'Surveys', body: 'Launch engagement and onboarding surveys; track completion.' },
];

export default function CompliancePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-400">Compliance</p>
        <h1 className="text-2xl font-semibold">Compliance Dashboard & Docs</h1>
        <p className="text-sm text-slate-400">Adaptive compliance, visa management, HR letters, and surveys.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {complianceCards.map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-lg font-semibold">{card.title}</p>
            <p className="text-sm text-slate-400">{card.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
