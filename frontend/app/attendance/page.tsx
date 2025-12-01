import { AttendanceTable } from '../dashboard/sections/attendance-table';

const summary = [
  { label: 'Absent (Month)', value: '2' },
  { label: 'Present (Month)', value: '20' },
  { label: 'Late (Month)', value: '3' },
  { label: 'Overtime Hours', value: '14' },
];

export default function AttendancePage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-400">Time & Presence</p>
        <h1 className="text-2xl font-semibold">Attendance</h1>
        <p className="text-sm text-slate-400">Mobile/Manual punches with device-ready integrations.</p>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {summary.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className="text-xl font-semibold">{item.value}</p>
          </div>
        ))}
      </div>

      <AttendanceTable />
    </div>
  );
}
