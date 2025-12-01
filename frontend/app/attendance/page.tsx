'use client';

import { useMemo, useState } from 'react';
import { AttendanceTable } from '../dashboard/sections/attendance-table';

const summaries = {
  week: { absent: 0, present: 5, late: 1, overtimeHours: 4 },
  month: { absent: 2, present: 20, late: 3, overtimeHours: 14 },
  year: { absent: 8, present: 180, late: 14, overtimeHours: 120 },
};

const ranges: Array<keyof typeof summaries> = ['week', 'month', 'year'];

export default function AttendancePage() {
  const [range, setRange] = useState<keyof typeof summaries>('month');
  const stats = useMemo(() => summaries[range], [range]);

  const chips = [
    { label: 'Absent', value: stats.absent, tone: 'text-rose-400' },
    { label: 'Present', value: stats.present, tone: 'text-emerald-400' },
    { label: 'Late', value: stats.late, tone: 'text-amber-400' },
    { label: 'Overtime Hours', value: stats.overtimeHours, tone: 'text-sky-400' },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs text-slate-400">Time & Presence</p>
          <h1 className="text-2xl font-semibold">Attendance</h1>
          <p className="text-sm text-slate-400">Mobile/Manual punches with device-ready integrations.</p>
        </div>
        <div className="flex gap-2 rounded-full border border-slate-800 bg-slate-900 p-1 text-xs">
          {ranges.map((option) => (
            <button
              key={option}
              onClick={() => setRange(option)}
              className={`rounded-full px-3 py-1 capitalize transition ${
                range === option ? 'bg-emerald-500 text-slate-900' : 'text-slate-300 hover:bg-slate-800'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 md:grid-cols-4">
        {chips.map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs text-slate-400">{item.label}</p>
            <p className={`text-xl font-semibold ${item.tone}`}>{item.value}</p>
          </div>
        ))}
      </div>

      <AttendanceTable />
    </div>
  );
}
