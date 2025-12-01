import { Injectable } from '@nestjs/common';

@Injectable()
export class WorkflowService {
  aiSuggestions() {
    return [
      {
        id: 'wf1',
        title: 'Leave approval path',
        suggestion: 'Manager → Department Head → HR Admin for requests > 5 days',
        confidence: 0.82,
      },
      {
        id: 'wf2',
        title: 'Expense claim follow-up',
        suggestion: 'Auto-create finance task when pending > 3 days',
        confidence: 0.76,
      },
    ];
  }

  triggers() {
    return [
      { id: 'tg1', action: 'Create task', condition: 'Probation end in 14 days', assignee: 'Manager' },
      { id: 'tg2', action: 'Start renewal workflow', condition: 'Contract expires in 30 days', assignee: 'HR Admin' },
    ];
  }
}
