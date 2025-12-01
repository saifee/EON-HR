import { IsDateString, IsOptional, IsString, MaxLength } from 'class-validator';

export class ApplyLeaveDto {
  @IsString()
  @MaxLength(50)
  type: string;

  @IsDateString()
  startDate: string;

  @IsDateString()
  endDate: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  reason?: string;
}
