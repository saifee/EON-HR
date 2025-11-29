import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tenant } from './tenant.entity';

@Injectable()
export class TenantService {
  constructor(@InjectRepository(Tenant) private readonly repo: Repository<Tenant>) {}

  findAll() {
    return this.repo.find();
  }

  async bootstrapDefault() {
    const existing = await this.repo.findOne({ where: { domain: 'demo.kingslee.hr' } });
    if (existing) return existing;
    const tenant = this.repo.create({ name: 'Kingslee HR Demo', domain: 'demo.kingslee.hr' });
    return this.repo.save(tenant);
  }
}
