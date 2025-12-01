import { AttendanceTable } from './sections/attendance-table';
import { PayrollTable } from './sections/payroll-table';
import { RecruitmentBoard } from './sections/recruitment-board';

export function Tables() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      <div className="lg:col-span-2 space-y-6">
        <AttendanceTable />
        <PayrollTable />
      </div>
      <RecruitmentBoard />
    </div>
  );
}
