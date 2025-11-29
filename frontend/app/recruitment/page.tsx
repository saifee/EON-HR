import { RecruitmentBoard } from '../dashboard/sections/recruitment-board';

export default function RecruitmentPage() {
  return (
    <div className="space-y-4">
      <div>
        <p className="text-xs text-slate-400">Talent</p>
        <h1 className="text-2xl font-semibold">Recruitment & Onboarding</h1>
        <p className="text-sm text-slate-400">Kanban pipeline, offers, onboarding steps.</p>
      </div>
      <RecruitmentBoard />
    </div>
  );
}
