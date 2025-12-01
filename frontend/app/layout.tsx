import './globals.css';
import { ReactNode } from 'react';
import { QueryProvider } from '../components/query-provider';
import { ThemeToggle } from '../components/theme-toggle';

export const metadata = {
  title: 'Kingslee HR',
  description: 'AI-powered HRMS inspired by Jisr & PalmHR',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-slate-950 text-white">
        <QueryProvider>
          <div className="flex min-h-screen">
            <aside className="hidden md:block w-64 bg-slate-900 border-r border-slate-800 p-6 space-y-4">
              <div className="text-xl font-semibold">Kingslee HR</div>
              <nav className="space-y-2 text-sm text-slate-200">
                <a className="block hover:text-white" href="/">Dashboard</a>
                <a className="block hover:text-white" href="/directory">Employee Directory</a>
                <a className="block hover:text-white" href="/self-service">Self Service</a>
                <a className="block hover:text-white" href="/payroll">Payroll</a>
                <a className="block hover:text-white" href="/attendance">Attendance</a>
                <a className="block hover:text-white" href="/leave">Leave</a>
                <a className="block hover:text-white" href="/training">Training</a>
                <a className="block hover:text-white" href="/performance">Performance</a>
                <a className="block hover:text-white" href="/recruitment">Recruitment</a>
                <a className="block hover:text-white" href="/analytics">Analytics</a>
                <a className="block hover:text-white" href="/compliance">Compliance</a>
                <a className="block hover:text-white" href="/communications">Communications</a>
                <a className="block hover:text-white" href="/settings">Settings</a>
              </nav>
            </aside>
            <main className="flex-1 p-6 space-y-6">
              <header className="flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Welcome back</p>
                  <h1 className="text-2xl font-semibold">Kingslee HR</h1>
                </div>
                <ThemeToggle />
              </header>
              {children}
            </main>
          </div>
        </QueryProvider>
      </body>
    </html>
  );
}
