const requests = [
  { employee: 'Layla Al Saud', type: 'Annual', status: 'Approved', dates: '1 Jul - 7 Jul' },
  { employee: 'Omar Al Harbi', type: 'Sick', status: 'Pending', dates: '20 Jun - 22 Jun' },
];

export default function LeavePage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-400">Leave</p>
        <h1 className="text-2xl font-semibold">Requests & Policies</h1>
        <p className="text-sm text-slate-400">Configurable approvals and policy builder.</p>
      </div>
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
        <div className="flex items-center justify-between pb-3">
          <h3 className="text-lg font-semibold">Recent Requests</h3>
          <span className="text-xs text-slate-400">Multi-level approvals</span>
        </div>
        <div className="space-y-3">
          {requests.map((request) => (
            <div key={request.employee} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950/60 p-3">
              <div>
                <p className="font-semibold">{request.employee}</p>
                <p className="text-xs text-slate-400">{request.dates}</p>
              </div>
              <div className="text-right text-sm">
                <p>{request.type}</p>
                <p className="text-emerald-400">{request.status}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
