import { AttendanceTable } from '../dashboard/sections/attendance-table';

export default function AttendancePage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-400">Time & Presence</p>
        <h1 className="text-2xl font-semibold">Attendance</h1>
        <p className="text-sm text-slate-400">Mobile/Manual punches with device-ready integrations.</p>
      </div>
      <AttendanceTable />
    </div>
  );
}
