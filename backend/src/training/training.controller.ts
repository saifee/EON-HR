import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TrainingService } from './training.service';

@ApiTags('training')
@Controller('training')
export class TrainingController {
  constructor(private readonly trainingService: TrainingService) {}

  @Get('courses')
  courses() {
    return this.trainingService.courses();
  }

  @Get('assignments')
  assignments() {
    return this.trainingService.assignments();
  }

  @Get('evaluations')
  evaluations() {
    return this.trainingService.evaluations();
  }
}
