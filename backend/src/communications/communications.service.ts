import { Injectable } from '@nestjs/common';

interface CommunicationLog {
  id: string;
  employeeId?: string;
  channel: 'sms' | 'email' | 'whatsapp';
  body: string;
  recipient: string;
  status: 'queued' | 'sent';
  timestamp: string;
}

@Injectable()
export class CommunicationsService {
  private logs: CommunicationLog[] = [
    {
      id: 'log-1',
      employeeId: 'EMP001',
      channel: 'email',
      body: 'Welcome to Kingslee HR',
      recipient: 'layla@demo.com',
      status: 'sent',
      timestamp: '2024-07-01T10:00:00Z',
    },
    {
      id: 'log-2',
      employeeId: 'EMP002',
      channel: 'sms',
      body: 'Shift updated to night schedule',
      recipient: '+966500000002',
      status: 'sent',
      timestamp: '2024-07-02T09:00:00Z',
    },
  ];

  private append(log: Omit<CommunicationLog, 'id' | 'timestamp' | 'status'>) {
    const entry: CommunicationLog = {
      id: `log-${this.logs.length + 1}`,
      timestamp: new Date().toISOString(),
      status: 'queued',
      ...log,
    };
    this.logs.push(entry);
    return entry;
  }

  send(channel: 'sms' | 'email' | 'whatsapp', payload: { recipient: string; body: string; employeeId?: string }) {
    return this.append({ ...payload, channel });
  }

  bulk(channel: 'sms' | 'email' | 'whatsapp', recipients: string[], body: string) {
    return recipients.map((recipient) => this.append({ recipient, body, channel }));
  }

  log(employeeId?: string) {
    if (employeeId) {
      return this.logs.filter((entry) => entry.employeeId === employeeId);
    }
    return this.logs;
  }
}
