import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CheckPasswordUser {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'enter username',
  })
  public username: string;
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    type: String,
    description: 'enter password ',
  })
  public password: string;
}
