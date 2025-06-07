import { Module } from '@nestjs/common';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostsRepository } from './posts.repository';

@Module({
  controllers: [PostsController],
  providers: [PostsService, PostsRepository],
  exports: [PostsService],
})
export class PostsModule { }
