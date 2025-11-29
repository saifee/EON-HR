import { Controller, Get, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { EmployeeService } from './employee.service';

@ApiTags('employees')
@Controller('employees')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Get()
  list() {
    return this.employeeService.findAll();
  }

  @Post('seed-demo')
  seed(@Query('tenantId') tenantId: string) {
    return this.employeeService.seedDemo(tenantId || 'demo');
  }
}
