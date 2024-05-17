import { Module } from '@nestjs/common';
import { ResourceModule } from './resource/resource.module';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [ResourceModule, AuthModule, DatabaseModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
