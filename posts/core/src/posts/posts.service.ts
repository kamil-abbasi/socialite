import { Injectable } from '@nestjs/common';

import { Post } from './entities';
import { CreatePostDto, UpdatePostDto } from './dto';
import { PostsRepository } from './posts.repository';

@Injectable()
export class PostsService {
  constructor(private readonly postsRepository: PostsRepository) { }

  async find(): Promise<Post[]> {
    return this.postsRepository.find();
  }

  async findOne(): Promise<Post | null> {
    return this.postsRepository.findOne();
  }

  async create(createDto: CreatePostDto): Promise<Post> {
    return this.postsRepository.create(createDto);
  }

  async update(updateDto: UpdatePostDto): Promise<void> {
    return this.postsRepository.update(updateDto);
  }

  async remove(): Promise<void> {
    return this.postsRepository.remove();
  }
}
