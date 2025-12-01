import { FileText, ShieldCheck, Smartphone, Upload, User, Wallet } from 'lucide-react';

const quickLinks = [
  { label: 'Apply for Leave', action: 'Create new request' },
  { label: 'Download Last Payslip', action: 'View PDF' },
  { label: 'Submit Expense', action: 'Start claim' },
  { label: 'Upload Personal Document', action: 'Add file' },
  { label: 'Check Assets', action: 'See assignments' },
];

const payslips = [
  { month: 'June 2024', net: '15,200 SAR', url: '/payslips/2024-06.pdf' },
  { month: 'May 2024', net: '14,950 SAR', url: '/payslips/2024-05.pdf' },
];

const leaveBalances = [
  { type: 'Annual', balance: 12, pending: 1 },
  { type: 'Sick', balance: 8, pending: 0 },
  { type: 'Unpaid', balance: 30, pending: 0 },
];

const expenses = [
  { id: 'EXP-001', category: 'Travel', amount: 420, status: 'Approved' },
  { id: 'EXP-002', category: 'Meals', amount: 120, status: 'Pending' },
];

const documents = [
  { name: 'Iqama', status: 'Valid', expiresOn: '2025-03-15' },
  { name: 'Health Insurance', status: 'Valid', expiresOn: '2024-12-31' },
];

export default function EssPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-slate-800 bg-slate-900 p-6 shadow-lg">
        <p className="text-xs uppercase tracking-wide text-accent">Employee Self-Service</p>
        <h1 className="text-2xl font-semibold mt-1">ESS Portal</h1>
        <p className="text-sm text-slate-300 mt-2 max-w-4xl">
          Manage profile, payroll documents, leave, attendance, assets, expenses, performance history, and personal
          documents. The UI mirrors the backend ESS endpoints so it can connect directly once APIs are wired up.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {[ 
          { title: 'Profile & Contacts', description: 'Update address, contacts, and emergency details.', icon: User },
          { title: 'Payslips & Taxes', description: 'Download recent payslips and tax forms.', icon: Wallet },
          { title: 'Leave & Attendance', description: 'Check balances and submit leave requests.', icon: FileText },
          { title: 'Assets & Policies', description: 'See assigned equipment and company policies.', icon: ShieldCheck },
          { title: 'Expenses & Reviews', description: 'Submit claims and view performance history.', icon: Smartphone },
          { title: 'Documents', description: 'Upload and track personal documents.', icon: Upload },
        ].map((card) => (
          <div key={card.title} className="rounded-xl border border-slate-800 bg-slate-900 p-5 flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">{card.title}</p>
                <p className="text-base text-slate-200">{card.description}</p>
              </div>
              <card.icon className="text-accent" size={24} />
            </div>
            <div className="flex flex-wrap gap-2 text-xs text-slate-400">
              <span className="rounded-full border border-slate-700 px-2 py-1">AI validation</span>
              <span className="rounded-full border border-slate-700 px-2 py-1">File uploads</span>
              <span className="rounded-full border border-slate-700 px-2 py-1">Approvals</span>
            </div>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <div className="lg:col-span-2 space-y-4">
          <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Recent payslips</h2>
                <p className="text-xs text-slate-400">Matches /ess/payslips API</p>
              </div>
              <button className="text-xs rounded-lg bg-accent/20 px-3 py-1 text-accent">Download all</button>
            </div>
            <div className="mt-3 space-y-2">
              {payslips.map((payslip) => (
                <div key={payslip.month} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-4 py-2">
                  <div>
                    <p className="text-sm text-slate-200">{payslip.month}</p>
                    <p className="text-xs text-slate-400">Net: {payslip.net}</p>
                  </div>
                  <a href={payslip.url} className="text-xs text-accent">Download</a>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Leave balances</h2>
                <p className="text-xs text-slate-400">Backed by /ess/leave/balances + /ess/leave/apply</p>
              </div>
              <button className="text-xs rounded-lg bg-accent/20 px-3 py-1 text-accent">Apply for leave</button>
            </div>
            <div className="mt-3 grid gap-2 md:grid-cols-3">
              {leaveBalances.map((leave) => (
                <div key={leave.type} className="rounded-lg border border-slate-800 bg-slate-950 p-3">
                  <p className="text-sm text-slate-200">{leave.type}</p>
                  <p className="text-xs text-slate-400">Balance: {leave.balance} days</p>
                  <p className="text-xs text-amber-300">Pending: {leave.pending}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">Expenses</h2>
                <p className="text-xs text-slate-400">Submit and track reimbursements</p>
              </div>
              <button className="text-xs rounded-lg bg-accent/20 px-3 py-1 text-accent">Submit expense</button>
            </div>
            <div className="mt-3 space-y-2">
              {expenses.map((expense) => (
                <div key={expense.id} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-4 py-2">
                  <div>
                    <p className="text-sm text-slate-200">{expense.category}</p>
                    <p className="text-xs text-slate-400">ID {expense.id}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-slate-200">{expense.amount} SAR</p>
                    <p className="text-xs text-emerald-300">{expense.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="space-y-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5 space-y-4">
            <div>
              <h3 className="text-sm font-semibold text-slate-200">Quick actions</h3>
              <div className="mt-3 space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    className="w-full rounded-lg border border-slate-800 bg-slate-950 px-3 py-2 text-left text-sm hover:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
                  >
                    <div className="text-slate-200">{link.label}</div>
                    <div className="text-xs text-slate-400">{link.action}</div>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-slate-200">AI compliance preview</h3>
              <p className="text-xs text-slate-400 mt-1">
                Hooks into visa expiry detection, probation reminders, and GOSI discrepancy alerts. Connects to the ESS endpoints to flag employee-specific risks.
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <h3 className="text-sm font-semibold text-slate-200">Personal documents</h3>
            <div className="mt-3 space-y-2">
              {documents.map((doc) => (
                <div key={doc.name} className="flex items-center justify-between rounded-lg border border-slate-800 bg-slate-950 px-3 py-2">
                  <div>
                    <p className="text-sm text-slate-200">{doc.name}</p>
                    <p className="text-xs text-slate-400">Expires {doc.expiresOn}</p>
                  </div>
                  <span className="text-xs text-emerald-300">{doc.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
