const channels = [
  { title: 'Bulk SMS', body: 'Send updates to staff and log them under communications.' },
  { title: 'Email', body: 'Notify employees about shifts, payroll, or reviews with templates.' },
  { title: 'WhatsApp', body: 'Reach employees quickly and keep an auditable record.' },
];

export default function CommunicationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-400">Communications</p>
        <h1 className="text-2xl font-semibold">Multi-channel Messaging</h1>
        <p className="text-sm text-slate-400">Send individual or bulk messages with time-stamped logs.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {channels.map((channel) => (
          <div key={channel.title} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-lg font-semibold">{channel.title}</p>
            <p className="text-sm text-slate-400">{channel.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
