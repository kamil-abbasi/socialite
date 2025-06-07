import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { AppController } from './app.controller';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './database/database.module';
import { CommonModule } from './common/common.module';
import { loadConfig } from './config';
import { AppService } from './app.service';

@Module({
  imports: [
    PostsModule,
    DatabaseModule,
    CommonModule,
    ConfigModule.forRoot({
      load: [loadConfig],
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
