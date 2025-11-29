import { Injectable } from '@nestjs/common';

@Injectable()
export class NotificationService {
  channels() {
    return [
      { type: 'email', enabled: true },
      { type: 'sms', enabled: true },
      { type: 'whatsapp', enabled: false },
    ];
  }
}
