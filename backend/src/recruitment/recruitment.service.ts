import { Injectable } from '@nestjs/common';

@Injectable()
export class RecruitmentService {
  jobs(tenantId: string) {
    return [
      { id: 'job-1', title: 'Senior Backend Engineer', status: 'open', openings: 2, tenantId },
      { id: 'job-2', title: 'HR Generalist', status: 'open', openings: 1, tenantId },
    ];
  }

  pipeline() {
    return [
      { stage: 'Applied', count: 24 },
      { stage: 'Screening', count: 10 },
      { stage: 'Offer', count: 2 },
    ];
  }

  aiScreening() {
    return {
      parsedResume: { skills: ['Node.js', 'NestJS', 'MySQL'], experience: 5 },
      matchingScore: 0.86,
      flags: ['Work authorization pending'],
      recommendedStage: 'Interview',
      draftEmail: 'Hi Ahmed, thanks for applying! We would like to invite you to a technical interview next week.',
    };
  }
}
