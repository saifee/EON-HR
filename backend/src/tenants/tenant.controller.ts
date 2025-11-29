import { Controller, Get, Post } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tenants')
@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  list() {
    return this.tenantService.findAll();
  }

  @Post('bootstrap-demo')
  createDemo() {
    return this.tenantService.bootstrapDefault();
  }
}
