import { Logger, Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import { UserModule } from '../user/user.module';
import { DbService } from 'src/database/db.service';
import { AuthService } from 'src/auth/auth.service';
import { UserService } from 'src/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Module({
  controllers: [ResourceController],
  providers: [
    ResourceService,
    DbService,
    AuthService,
    UserService,
    JwtService,
    Logger,
  ],
  imports: [UserModule],
})
export class ResourceModule {}
