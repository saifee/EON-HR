import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { SelfServiceService } from './self-service.service';

@ApiTags('self-service')
@Controller('self-service')
export class SelfServiceController {
  constructor(private readonly selfService: SelfServiceService) {}

  @Get('profile')
  profile(@Query('tenantId') tenantId: string, @Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.profile(tenantId || 'demo', employeeId);
  }

  @Get('payslips')
  payslips(@Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.payslips(employeeId);
  }

  @Get('leave')
  leave(@Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.leave(employeeId);
  }

  @Get('attendance')
  attendance(@Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.attendance(employeeId);
  }

  @Get('assets')
  assets(@Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.assets(employeeId);
  }

  @Get('policies')
  policies() {
    return this.selfService.policies();
  }

  @Get('expenses')
  expenses(@Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.expenses(employeeId);
  }

  @Get('performance')
  performance(@Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.performance(employeeId);
  }

  @Get('documents')
  documents(@Query('employeeId') employeeId = 'EMP001') {
    return this.selfService.documents(employeeId);
  }
}
