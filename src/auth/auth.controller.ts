import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { IAuth } from './auth.interface';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { User } from 'prisma/prisma-client';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Auth')
export class AuthController implements IAuth {
  /**
   *
   */
  constructor(private readonly auth: AuthService) {}

  @Post('SignUp')
  SignUp(@Body() data: CreateUserDto): Promise<User> {
    return this.auth.SignUp(data);
  }
  @Post('SignIn')
  SignIn(@Body() data: Partial<User>): Promise<string> {
    return this.auth.SignIn(data);
  }
  @Post('ForgotPassword')
  ForgotPassword(
    @Body('id') id: string,
    @Body('password') password: string,
  ): Promise<true> {
    return this.auth.ForgotPassword(id, password);
  }
}
