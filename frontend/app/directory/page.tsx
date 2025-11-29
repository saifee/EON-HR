const employees = [
  { name: 'Layla Al Saud', role: 'HR Business Partner', email: 'layla@demo.com' },
  { name: 'Omar Al Harbi', role: 'Backend Engineer', email: 'omar@demo.com' },
  { name: 'Sarah Al Qahtani', role: 'Product Manager', email: 'sarah@demo.com' },
];

export default function DirectoryPage() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs text-slate-400">People</p>
          <h1 className="text-2xl font-semibold">Employee Directory</h1>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {employees.map((employee) => (
          <div key={employee.email} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-lg font-semibold">{employee.name}</p>
            <p className="text-sm text-slate-300">{employee.role}</p>
            <p className="text-xs text-slate-500">{employee.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
