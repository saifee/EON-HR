const cycles = [
  { name: 'H1 2024', status: 'Active', respondents: 18 },
  { name: 'H2 2023', status: 'Completed', respondents: 22 },
];

const aiInsights = [
  'AI templates adjust by role and department (skills, goals, values)',
  'Highlights achievements and risks from review feedback',
  'Drafts summaries for managers to refine',
];

export default function PerformancePage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-400">Performance Reviews</p>
        <h1 className="text-2xl font-semibold">Cycles & AI Assistance</h1>
        <p className="text-sm text-slate-400">Review templates, self/manager/360 feedback, and AI-authored summaries.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {cycles.map((cycle) => (
          <div key={cycle.name} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-lg font-semibold">{cycle.name}</p>
            <p className="text-xs text-slate-400">Status: {cycle.status}</p>
            <p className="text-xs text-slate-400">Respondents: {cycle.respondents}</p>
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
        <h3 className="text-lg font-semibold">AI Insights</h3>
        <ul className="list-disc pl-5 text-sm text-slate-300">
          {aiInsights.map((insight) => (
            <li key={insight}>{insight}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
