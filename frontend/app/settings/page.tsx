const schedules = [
  { name: 'Standard', hours: '09:00-17:00', applies: 'Weekdays', duration: 'Full year' },
  { name: 'Ramadan', hours: '10:00-15:00', applies: 'Ramadan', duration: 'Seasonal' },
  { name: 'Semester Break', hours: '10:00-14:00', applies: 'Semester break', duration: 'Week-long window' },
];

const departments = ['People', 'Engineering', 'Finance', 'Operations'];
const positions = ['HRBP', 'Software Engineer', 'Finance Analyst', 'People Ops Specialist'];

const approvals = [
  'Leave > 5 days: Manager → Department Head → HR Admin',
  'Expense > 2000 SAR: Manager → Finance',
  'New Hire contract: Manager → HR Admin → Finance',
];

const onboardingTemplates = [
  { name: 'Default Onboarding', steps: ['Personal details', 'Emergency contacts', 'Bank info', 'Document uploads'] },
  { name: 'Contractor', steps: ['Personal details', 'ID upload'] },
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
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Work Schedules</h3>
          <button className="rounded-lg border border-emerald-500 px-3 py-1 text-xs font-semibold text-emerald-400">Add schedule</button>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {schedules.map((schedule) => (
            <div key={schedule.name} className="rounded-lg border border-slate-800 p-3 space-y-1">
              <p className="font-semibold">{schedule.name}</p>
              <p className="text-xs text-slate-400">Hours: {schedule.hours}</p>
              <p className="text-xs text-slate-400">Applies: {schedule.applies}</p>
              <p className="text-[11px] text-emerald-400">{schedule.duration}</p>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate-400">Attach schedules to date ranges (week-long, Ramadan, semester break) when creating shifts.</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2 md:col-span-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Departments</h3>
            <button className="rounded-lg border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">Add department</button>
          </div>
          <ul className="grid grid-cols-2 gap-2 text-sm text-slate-300">
            {departments.map((dept) => (
              <li key={dept} className="rounded-lg border border-slate-800 px-3 py-2">
                {dept}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Positions</h3>
            <button className="rounded-lg border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">Add position</button>
          </div>
          <ul className="space-y-2 text-sm text-slate-300">
            {positions.map((pos) => (
              <li key={pos} className="rounded-lg border border-slate-800 px-3 py-2">
                {pos}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Approval Workflows</h3>
          <button className="rounded-lg border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">Configure levels</button>
        </div>
        <ul className="list-disc pl-5 text-sm text-slate-300 space-y-1">
          {approvals.map((flow) => (
            <li key={flow}>{flow}</li>
          ))}
        </ul>
        <p className="text-xs text-slate-400">Define multi-level approvers (Manager, Department Head, HR Admin, Finance) with delays and cascading triggers.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Onboarding Templates</h3>
          <button className="rounded-lg border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200">Add template</button>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {onboardingTemplates.map((template) => (
            <div key={template.name} className="rounded-lg border border-slate-800 p-3">
              <p className="font-semibold">{template.name}</p>
              <p className="text-xs text-slate-400">Steps: {template.steps.join(', ')}</p>
              <p className="text-[11px] text-emerald-400">Optional when creating a new staff profile</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
