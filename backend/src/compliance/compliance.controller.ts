import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ComplianceService } from './compliance.service';

@ApiTags('compliance')
@Controller('compliance')
export class ComplianceController {
  constructor(private readonly complianceService: ComplianceService) {}

  @Get('dashboard')
  dashboard() {
    return this.complianceService.dashboard();
  }

  @Get('hr-letters')
  hrLetters() {
    return this.complianceService.hrLetters();
  }

  @Get('surveys')
  surveys() {
    return this.complianceService.surveys();
  }
}
