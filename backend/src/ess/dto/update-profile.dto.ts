import { IsArray, IsOptional, IsString, MaxLength, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

class ContactDto {
  @IsString()
  @MaxLength(30)
  type: string;

  @IsString()
  @MaxLength(120)
  value: string;
}

class EmergencyContactDto {
  @IsString()
  @MaxLength(80)
  name: string;

  @IsString()
  @MaxLength(40)
  relation: string;

  @IsString()
  @MaxLength(40)
  phone: string;
}

export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  @MaxLength(250)
  address?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => ContactDto)
  contacts?: ContactDto[];

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => EmergencyContactDto)
  emergencyContacts?: EmergencyContactDto[];
}
