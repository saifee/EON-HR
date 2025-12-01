import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

function sixDigitId(seed: number) {
  return seed.toString().padStart(6, '0');
}

@Injectable()
export class EmployeeService {
  constructor(@InjectRepository(Employee) private readonly repo: Repository<Employee>) {}

  findAll() {
    return this.repo.find();
  }

  async seedDemo(tenantId: string) {
    const employees = [
      this.repo.create({
        firstName: 'Layla',
        lastName: 'Al Saud',
        email: 'layla@demo.com',
        department: 'HR',
        jobTitle: 'HRBP',
        tenantId,
        staffId: sixDigitId(1),
        passportNumber: 'P1234567',
        onboardingTemplateId: 'onb-1',
      }),
      this.repo.create({
        firstName: 'Omar',
        lastName: 'Al Harbi',
        email: 'omar@demo.com',
        department: 'Engineering',
        jobTitle: 'Engineer',
        tenantId,
        staffId: sixDigitId(2),
        passportNumber: 'P2345678',
        onboardingTemplateId: 'onb-1',
      }),
    ];
    return this.repo.save(employees);
  }
}
