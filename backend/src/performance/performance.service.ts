import { Injectable } from '@nestjs/common';

@Injectable()
export class PerformanceService {
  goals(tenantId: string) {
    return [
      { id: 'g1', title: 'Launch mobile attendance', owner: 'Layla', progress: 0.6, tenantId },
      { id: 'g2', title: 'Improve hiring time to 25 days', owner: 'Omar', progress: 0.45, tenantId },
    ];
  }

  reviews() {
    return [
      { id: 'r1', cycle: 'H1 2024', status: 'active', respondents: 18 },
    ];
  }
}
