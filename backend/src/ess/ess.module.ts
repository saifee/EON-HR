import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '../employees/employee.entity';
import { EssController } from './ess.controller';
import { EssService } from './ess.service';
import { ExpenseClaim } from './entities/expense-claim.entity';
import { LeaveRequest } from './entities/leave-request.entity';
import { PersonalDocument } from './entities/personal-document.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, LeaveRequest, ExpenseClaim, PersonalDocument])],
  controllers: [EssController],
  providers: [EssService],
})
export class EssModule {}
