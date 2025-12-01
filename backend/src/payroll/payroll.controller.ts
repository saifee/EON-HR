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

  @Get('structures')
  structures(@Query('tenantId') tenantId: string) {
    return this.payrollService.salaryStructures(tenantId || 'demo');
  }

  @Get('run')
  run(@Query('period') period = '2024-06', @Query('tenantId') tenantId: string) {
    return this.payrollService.runPayroll(period, tenantId || 'demo');
  }

  @Get('payslips')
  payslips(@Query('tenantId') tenantId: string) {
    return this.payrollService.payslips(tenantId || 'demo');
  }

  @Get('ai-adjustments')
  aiAdjustments() {
    return this.payrollService.aiAdjustments();
  }
}
