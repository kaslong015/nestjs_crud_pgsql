import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmConfig } from './config/config.service';
import { Module } from '@nestjs/common';

import { UserModule } from './user/user.module';

@Module({
  imports: [
   TypeOrmModule.forRoot(TypeOrmConfig),
    UserModule],
  
})
export class AppModule {}
