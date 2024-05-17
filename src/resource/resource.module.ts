import { Module } from '@nestjs/common';
import { ResourceService } from './resource.service';
import { ResourceController } from './resource.controller';
import { UserModule } from '../user/user.module';
import { DbService } from 'src/database/db.service';

@Module({
  controllers: [ResourceController],
  providers: [ResourceService, DbService],
  imports: [UserModule],
})
export class ResourceModule {}
