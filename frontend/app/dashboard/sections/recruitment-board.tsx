const stages = [
  { title: 'Applied', count: 24 },
  { title: 'Screening', count: 10 },
  { title: 'Offer', count: 2 },
];

export function RecruitmentBoard() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between pb-3">
        <h3 className="text-lg font-semibold">Recruitment Pipeline</h3>
        <span className="text-xs text-slate-400">Demo data</span>
      </div>
      <div className="space-y-3">
        {stages.map((stage) => (
          <div key={stage.title} className="rounded-lg border border-slate-800 bg-slate-950/60 p-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-slate-200">{stage.title}</span>
              <span className="text-sm font-semibold">{stage.count}</span>
            </div>
            <div className="mt-2 h-2 w-full rounded-full bg-slate-800">
              <div className="h-2 rounded-full bg-accent" style={{ width: `${Math.min(100, stage.count * 4)}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
