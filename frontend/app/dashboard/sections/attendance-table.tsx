const rows = [
  { employee: 'Layla Al Saud', checkIn: '08:59', checkOut: '17:10', status: 'On time' },
  { employee: 'Omar Al Harbi', checkIn: '09:12', checkOut: '17:45', status: 'Late' },
  { employee: 'Sarah Al Qahtani', checkIn: '08:50', checkOut: '17:00', status: 'On time' },
];

export function AttendanceTable() {
  return (
    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="flex items-center justify-between pb-3">
        <h3 className="text-lg font-semibold">Attendance</h3>
        <span className="text-xs text-slate-400">Real-time punches</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-left text-slate-400">
            <tr>
              <th className="py-2">Employee</th>
              <th className="py-2">Check-in</th>
              <th className="py-2">Check-out</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800">
            {rows.map((row) => (
              <tr key={row.employee} className="hover:bg-slate-800/60">
                <td className="py-2">{row.employee}</td>
                <td className="py-2">{row.checkIn}</td>
                <td className="py-2">{row.checkOut}</td>
                <td className="py-2 text-emerald-400">{row.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
