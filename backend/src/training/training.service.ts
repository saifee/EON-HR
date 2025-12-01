import { Injectable } from '@nestjs/common';

@Injectable()
export class TrainingService {
  courses() {
    return [
      { id: 'course-1', title: 'Onboarding 101', status: 'Active', audience: 'All staff' },
      { id: 'course-2', title: 'Safety & Compliance', status: 'Active', audience: 'Field teams' },
    ];
  }

  assignments() {
    return [
      { courseId: 'course-1', employeeId: 'EMP001', dueDate: '2024-07-15', status: 'In Progress' },
      { courseId: 'course-2', employeeId: 'EMP002', dueDate: '2024-07-20', status: 'Not Started' },
    ];
  }

  evaluations() {
    return [
      { id: 'eval-1', courseId: 'course-1', employeeId: 'EMP001', score: 92, status: 'Completed' },
      { id: 'eval-2', courseId: 'course-2', employeeId: 'EMP002', score: null, status: 'Pending' },
    ];
  }
}
