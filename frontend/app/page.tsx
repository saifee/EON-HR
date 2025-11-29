import { DashboardKpis } from './dashboard/kpis';
import { Tables } from './dashboard/tables';

export default async function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardKpis />
      <Tables />
    </div>
  );
}
