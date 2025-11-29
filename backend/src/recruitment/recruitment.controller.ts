import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RecruitmentService } from './recruitment.service';

@ApiTags('recruitment')
@Controller('recruitment')
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}

  @Get('jobs')
  jobs(@Query('tenantId') tenantId: string) {
    return this.recruitmentService.jobs(tenantId || 'demo');
  }

  @Get('pipeline')
  pipeline() {
    return this.recruitmentService.pipeline();
  }
}
