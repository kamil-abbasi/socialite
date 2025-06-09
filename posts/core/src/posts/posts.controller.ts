import {
  Controller,
  Get as HttpGet,
  Patch as HttpPatch,
  Post as HttpPost,
  Delete as HttpDelete,
} from '@nestjs/common';

import { Post } from './entities';
import { CreatePostDto, UpdatePostDto } from './dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) { }

  @HttpGet('/')
  async find(): Promise<Post[]> {
    return this.postsService.find();
  }

  @HttpGet('/:post-id')
  async findOne(): Promise<Post | null> {
    return this.postsService.findOne();
  }

  @HttpPost('/')
  async create(createDto: CreatePostDto): Promise<Post> {
    return this.postsService.create(createDto);
  }

  @HttpPatch('/:post-id')
  async update(updateDto: UpdatePostDto): Promise<void> {
    return this.postsService.update(updateDto);
  }

  @HttpDelete('/:post-id')
  async remove(): Promise<void> {
    return this.postsService.remove();
  }
}
