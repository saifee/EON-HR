import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SettingsService } from './settings.service';

@ApiTags('settings')
@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Get('branding')
  branding(@Query('tenantId') tenantId: string) {
    return this.settingsService.branding(tenantId || 'demo');
  }
}
