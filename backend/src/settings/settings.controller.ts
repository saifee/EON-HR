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

  @Get('work-schedules')
  workSchedules() {
    return this.settingsService.workSchedules();
  }

  @Get('departments')
  departments() {
    return this.settingsService.departments();
  }

  @Get('positions')
  positions() {
    return this.settingsService.positions();
  }

  @Get('approval-flows')
  approvalFlows() {
    return this.settingsService.approvalFlows();
  }

  @Get('onboarding-templates')
  onboardingTemplates() {
    return this.settingsService.onboardingTemplates();
  }
}
