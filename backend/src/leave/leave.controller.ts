import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { LeaveService } from './leave.service';

@ApiTags('leave')
@Controller('leave')
export class LeaveController {
  constructor(private readonly leaveService: LeaveService) {}

  @Get('requests')
  list(@Query('tenantId') tenantId: string) {
    return this.leaveService.list(tenantId || 'demo');
  }
}
