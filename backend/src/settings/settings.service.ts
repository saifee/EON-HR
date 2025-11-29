import { Injectable } from '@nestjs/common';

@Injectable()
export class SettingsService {
  branding(tenantId: string) {
    return {
      tenantId,
      name: 'Kingslee HR',
      primaryColor: '#0F766E',
      accentColor: '#FDBA74',
      logoUrl: 'https://cdn.example.com/logo.png',
    };
  }
}
