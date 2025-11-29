import { IsEmail, IsNotEmpty, IsOptional, MinLength } from 'class-validator';

export class RegisterDto {
  @IsEmail()
  email: string;

  @MinLength(8)
  password: string;

  @IsNotEmpty()
  fullName: string;

  @IsNotEmpty()
  tenantId: string;
}

export class LoginDto {
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export class RefreshDto {
  @IsNotEmpty()
  refreshToken: string;

  @IsOptional()
  tenantId?: string;
}
