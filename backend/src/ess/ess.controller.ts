import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { ApplyLeaveDto } from './dto/apply-leave.dto';
import { SubmitExpenseDto } from './dto/submit-expense.dto';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { UploadDocumentDto } from './dto/upload-document.dto';
import { EssService } from './ess.service';

@ApiTags('ess')
@Controller('ess')
export class EssController {
  constructor(private readonly essService: EssService) {}

  @Get('profile')
  profile() {
    return this.essService.getProfile();
  }

  @Patch('profile')
  updateProfile(@Body() dto: UpdateProfileDto) {
    return this.essService.updateProfile(dto);
  }

  @Get('payslips')
  payslips() {
    return this.essService.getPayslips();
  }

  @Get('leave/balances')
  leaveBalances() {
    return this.essService.getLeaveBalances();
  }

  @Post('leave/apply')
  applyLeave(@Body() dto: ApplyLeaveDto) {
    return this.essService.applyLeave(dto);
  }

  @Get('attendance')
  attendance() {
    return this.essService.getAttendanceSummary();
  }

  @Get('assets')
  assets() {
    return this.essService.getAssets();
  }

  @Get('policies')
  policies() {
    return this.essService.getPolicies();
  }

  @Get('expenses')
  expenses() {
    return this.essService.getExpenses();
  }

  @Post('expenses')
  submitExpense(@Body() dto: SubmitExpenseDto) {
    return this.essService.submitExpense(dto);
  }

  @Get('performance')
  performanceHistory() {
    return this.essService.getPerformanceHistory();
  }

  @Get('documents')
  personalDocuments() {
    return this.essService.getPersonalDocuments();
  }

  @Post('documents')
  uploadDocument(@Body() dto: UploadDocumentDto) {
    return this.essService.uploadDocument(dto);
  }
}
