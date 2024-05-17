import { Logger, Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { DbService } from 'src/database/db.service';

@Module({
  controllers: [UserController],
  providers: [UserService, DbService,Logger],
})
export class UserModule {}
