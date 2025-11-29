import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PayrollService } from './payroll.service';

@ApiTags('payroll')
@Controller('payroll')
export class PayrollController {
  constructor(private readonly payrollService: PayrollService) {}

  @Get('preview')
  preview(@Query('tenantId') tenantId: string) {
    return this.payrollService.preview(tenantId || 'demo');
  }
}
