import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';

@ApiTags('attendance')
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  list(@Query('tenantId') tenantId: string) {
    return this.attendanceService.list(tenantId || 'demo');
  }

  @Get('summary')
  summary(@Query('tenantId') tenantId: string) {
    return this.attendanceService.summary(tenantId || 'demo');
  }

  @Get('overtime-policies')
  overtimePolicies() {
    return this.attendanceService.overtimePolicies();
  }
}
