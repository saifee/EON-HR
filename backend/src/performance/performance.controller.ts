import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PerformanceService } from './performance.service';

@ApiTags('performance')
@Controller('performance')
export class PerformanceController {
  constructor(private readonly performanceService: PerformanceService) {}

  @Get('goals')
  goals(@Query('tenantId') tenantId: string) {
    return this.performanceService.goals(tenantId || 'demo');
  }

  @Get('reviews')
  reviews() {
    return this.performanceService.reviews();
  }

  @Get('ai-templates')
  aiTemplates(@Query('role') role = 'Engineer') {
    return this.performanceService.aiTemplates(role);
  }

  @Get('ai-insights')
  aiInsights() {
    return this.performanceService.aiInsights();
  }
}
