import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { loadConfig } from './config';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    DatabaseModule,
    CommonModule,
    ConfigModule.forRoot({
      load: [loadConfig],
      isGlobal: true,
    }),
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
