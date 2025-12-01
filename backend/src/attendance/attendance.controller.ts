import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AttendanceService } from './attendance.service';

@ApiTags('attendance')
@Controller('attendance')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Get()
  list(@Query('tenantId') tenantId = 'demo') {
    return this.attendanceService.list(tenantId);
  }

  @Get('summary')
  summary(@Query('tenantId') tenantId = 'demo', @Query('range') range: 'week' | 'month' | 'year' = 'month') {
    return this.attendanceService.summary(tenantId, range);
  }

  @Get('overtime/policies')
  overtimePolicies() {
    return this.attendanceService.overtimePolicies();
  }

  @Post('check-in')
  checkIn(
    @Body() body: { tenantId?: string; employeeId: string; employeeName: string; source: 'machine' | 'manual' | 'mobile'; location?: string },
  ) {
    return this.attendanceService.checkIn({
      tenantId: body.tenantId || 'demo',
      employeeId: body.employeeId,
      employeeName: body.employeeName,
      source: body.source,
      location: body.location,
    });
  }

  @Post('check-out/:id')
  checkOut(@Param('id') id: string, @Body() body: { notes?: string }) {
    return this.attendanceService.checkOut(id, body.notes);
  }
}
