import { Logger, Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { DbService } from 'src/database/db.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';
import { AuthController } from './auth.controller';

@Module({
  providers: [AuthService, DbService, UserService, Logger, JwtService],
  controllers: [AuthController],
})
export class AuthModule {}
