import { IsNotEmpty, IsString } from '@nestjs/class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateResourceDto {
  @IsNotEmpty({
    message: 'title cannot be empty',
  })
  @IsString()
  @ApiProperty()
  title: string;
  @IsNotEmpty({
    message: 'userid cannot be empty',
  })
  @IsString()
  @ApiProperty()
  userid: string;
}
