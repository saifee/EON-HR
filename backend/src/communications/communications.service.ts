import { Injectable } from '@nestjs/common';

@Injectable()
export class CommunicationsService {
  send(channel: 'sms' | 'email' | 'whatsapp', payload: { recipient: string; body: string }) {
    return { ...payload, channel, status: 'queued', sentAt: new Date().toISOString() };
  }

  bulk(channel: 'sms' | 'email' | 'whatsapp', recipients: string[], body: string) {
    return recipients.map((recipient, index) => ({ id: `msg-${index + 1}`, recipient, channel, body, status: 'queued' }));
  }

  log() {
    return [
      { id: 'log-1', employeeId: 'EMP001', channel: 'email', body: 'Welcome to Kingslee HR', timestamp: '2024-07-01T10:00:00Z' },
      { id: 'log-2', employeeId: 'EMP002', channel: 'sms', body: 'Shift updated to night schedule', timestamp: '2024-07-02T09:00:00Z' },
    ];
  }
}
