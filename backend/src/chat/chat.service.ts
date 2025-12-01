import { Injectable } from '@nestjs/common';

interface Message {
  id: string;
  sender: string;
  channel: string;
  body: string;
  timestamp: string;
  attachments?: string[];
  emoji?: string;
}

@Injectable()
export class ChatService {
  private messages: Message[] = [
    {
      id: 'm1',
      sender: 'EMP001',
      channel: 'general',
      body: 'Welcome to Kingslee HR!',
      timestamp: new Date().toISOString(),
    },
  ];

  history(channel = 'general') {
    return this.messages.filter((m) => m.channel === channel);
  }

  send(message: Omit<Message, 'id' | 'timestamp'>) {
    const record: Message = { id: `m${this.messages.length + 1}`, timestamp: new Date().toISOString(), ...message };
    this.messages.push(record);
    return record;
  }
}
