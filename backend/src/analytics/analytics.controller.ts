import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AnalyticsService } from './analytics.service';

@ApiTags('analytics')
@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboards')
  dashboards() {
    return this.analyticsService.dashboards();
  }

  @Get('predictive')
  predictive() {
    return this.analyticsService.predictive();
  }

  @Get('reports')
  reports() {
    return this.analyticsService.reports();
  }

  @Get('employee-history')
  employeeHistory(@Query('employeeId') employeeId = 'EMP001') {
    return this.analyticsService.employeeHistory(employeeId);
  }

  @Get('scheduled')
  scheduled() {
    return this.analyticsService.scheduledReports();
  }
}
