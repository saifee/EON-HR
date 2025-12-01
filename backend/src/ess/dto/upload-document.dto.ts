import { IsDateString, IsNotEmpty, IsOptional, IsString, Matches, MaxLength } from 'class-validator';

export class UploadDocumentDto {
  @IsString()
  @MaxLength(120)
  name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^https?:\/\//, { message: 'fileUrl must be an http(s) link' })
  fileUrl: string;

  @IsOptional()
  @IsString()
  @MaxLength(80)
  category?: string;

  @IsOptional()
  @IsDateString()
  expiresOn?: string;
}
