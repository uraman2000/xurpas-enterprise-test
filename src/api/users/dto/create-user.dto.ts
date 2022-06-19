import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  public first_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  public last_name: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  public address: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(4)
  @ApiProperty({ type: String, example: '0023' })
  public postal_code: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(11)
  @MaxLength(11)
  @ApiProperty({ type: String, example: '09474715155' })
  public contact_phone_number: string;

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ type: String, example: 'string@mail.com' })
  public email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  public username: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ type: String })
  public password: string;
}
