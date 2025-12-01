import { IsIn, IsNumber, IsOptional, IsPositive, IsString, MaxLength } from 'class-validator';

export class SubmitExpenseDto {
  @IsNumber()
  @IsPositive()
  amount: number;

  @IsString()
  @MaxLength(50)
  category: string;

  @IsOptional()
  @IsString()
  @MaxLength(250)
  description?: string;

  @IsOptional()
  @IsIn(['SAR', 'USD', 'EUR', 'AED'], { message: 'currency must be one of SAR, USD, EUR, AED' })
  currency?: 'SAR' | 'USD' | 'EUR' | 'AED';
}
