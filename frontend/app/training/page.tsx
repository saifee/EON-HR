const courses = [
  { title: 'Onboarding 101', status: 'Active', due: 'Always available' },
  { title: 'Safety & Compliance', status: 'Active', due: 'Quarterly' },
];

const evaluations = [
  { course: 'Onboarding 101', employee: 'Layla Al Saud', score: 92, status: 'Completed' },
  { course: 'Safety & Compliance', employee: 'Omar Al Harbi', score: null, status: 'Pending' },
];

export default function TrainingPage() {
  return (
    <div className="space-y-6">
      <div>
        <p className="text-xs text-slate-400">Training LMS</p>
        <h1 className="text-2xl font-semibold">Training & Evaluations</h1>
        <p className="text-sm text-slate-400">Assign courses, manage completions, and evaluate performance.</p>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-3">
        <h3 className="text-lg font-semibold">Courses</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {courses.map((course) => (
            <div key={course.title} className="rounded-lg border border-slate-800 p-3">
              <p className="font-semibold">{course.title}</p>
              <p className="text-xs text-slate-400">Status: {course.status}</p>
              <p className="text-xs text-slate-400">Schedule: {course.due}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-xl border border-slate-800 bg-slate-900 p-4 space-y-3">
        <h3 className="text-lg font-semibold">Evaluations</h3>
        <div className="grid gap-3 md:grid-cols-2">
          {evaluations.map((evaluation) => (
            <div key={evaluation.course} className="rounded-lg border border-slate-800 p-3">
              <p className="font-semibold">{evaluation.course}</p>
              <p className="text-xs text-slate-400">Employee: {evaluation.employee}</p>
              <p className="text-xs text-slate-400">Status: {evaluation.status}</p>
              <p className="text-xs text-slate-400">Score: {evaluation.score ?? '—'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
