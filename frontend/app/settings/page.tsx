const schedules = [
  { name: 'Standard', hours: '09:00-17:00', applies: 'Weekdays' },
  { name: 'Ramadan', hours: '10:00-15:00', applies: 'Ramadan' },
];

const departments = ['People', 'Engineering', 'Finance'];
const positions = ['HRBP', 'Software Engineer', 'Finance Analyst'];

const approvals = [
  'Leave > 5 days: Manager → Department Head → HR Admin',
  'Expense > 2000 SAR: Manager → Finance',
];

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-400">Settings</p>
        <h1 className="text-2xl font-semibold">Schedules, Departments & Positions</h1>
        <p className="text-sm text-slate-400">Configure work schedules, approval levels, onboarding templates, and role catalog.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-3">
        <h3 className="text-lg font-semibold">Work Schedules</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {schedules.map((schedule) => (
            <div key={schedule.name} className="rounded-lg border border-slate-800 p-3">
              <p className="font-semibold">{schedule.name}</p>
              <p className="text-xs text-slate-400">Hours: {schedule.hours}</p>
              <p className="text-xs text-slate-400">Applies: {schedule.applies}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
          <h3 className="text-lg font-semibold">Departments</h3>
          <ul className="list-disc pl-5 text-sm text-slate-300">
            {departments.map((dept) => (
              <li key={dept}>{dept}</li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
          <h3 className="text-lg font-semibold">Positions</h3>
          <ul className="list-disc pl-5 text-sm text-slate-300">
            {positions.map((pos) => (
              <li key={pos}>{pos}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
        <h3 className="text-lg font-semibold">Approval Workflows</h3>
        <ul className="list-disc pl-5 text-sm text-slate-300">
          {approvals.map((flow) => (
            <li key={flow}>{flow}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
