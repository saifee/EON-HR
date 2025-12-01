const rows = [
  {
    employeeId: 'EMP001',
    employee: 'Layla Al Saud',
    date: '2024-07-01',
    checkIn: '09:02',
    checkOut: '17:10',
    totalHours: '8.10',
    status: 'Late',
    source: 'Mobile (Geo)',
    notes: 'Riyadh HQ perimeter',
  },
  {
    employeeId: 'EMP002',
    employee: 'Omar Al Harbi',
    date: '2024-07-01',
    checkIn: '08:55',
    checkOut: '17:05',
    totalHours: '8.17',
    status: 'Present',
    source: 'Machine',
    notes: 'ZKT device sync',
  },
  {
    employeeId: 'EMP003',
    employee: 'Sarah Al Qahtani',
    date: '2024-07-01',
    checkIn: '-',
    checkOut: '-',
    totalHours: '-',
    status: 'Absent',
    source: 'Manual',
    notes: 'On approved leave',
  },
];

const statusColor: Record<string, string> = {
  Present: 'text-emerald-400',
  Late: 'text-amber-400',
  Absent: 'text-rose-400',
};

export function AttendanceTable() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between pb-3">
        <h3 className="text-lg font-semibold">Attendance</h3>
        <span className="text-xs text-slate-400">Check-in/out with source & notes</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-400">
            <tr>
              <th className="py-2">ID</th>
              <th className="py-2">Employee</th>
              <th className="py-2">Date</th>
              <th className="py-2">Check-in</th>
              <th className="py-2">Check-out</th>
              <th className="py-2">Total Hours</th>
              <th className="py-2">Status</th>
              <th className="py-2">Source</th>
              <th className="py-2">Notes</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {rows.map((row) => (
              <tr key={`${row.employeeId}-${row.date}`} className="hover:bg-slate-800/60">
                <td className="py-2 text-slate-300">{row.employeeId}</td>
                <td className="py-2">{row.employee}</td>
                <td className="py-2 text-slate-300">{row.date}</td>
                <td className="py-2 text-slate-300">{row.checkIn}</td>
                <td className="py-2 text-slate-300">{row.checkOut}</td>
                <td className="py-2 text-slate-300">{row.totalHours}</td>
                <td className={`py-2 font-semibold ${statusColor[row.status]}`}>{row.status}</td>
                <td className="py-2 text-slate-300">{row.source}</td>
                <td className="py-2 text-slate-400">{row.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
