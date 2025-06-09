import { Injectable } from '@nestjs/common';

import { Post } from './entities';
import { CreatePostDto, UpdatePostDto } from './dto';

const dummyPost: Post = {
  id: 'some-id',
  slug: 'hello-world',
  title: 'Hello, World!',
  content: 'Lorem ipsum',
  tags: ['test'],
  createdAt: 'iso-timestamp',
  updatedAt: 'iso-timestamp',
  userId: 'some-user',
};

@Injectable()
export class PostsRepository {
  async find(): Promise<Post[]> {
    return Promise.resolve([]);
  }

  async findOne(): Promise<Post | null> {
    return Promise.resolve(null);
  }

  async create(createDto: CreatePostDto): Promise<Post> {
    return Promise.resolve(dummyPost);
  }

  async update(updateDto: UpdatePostDto): Promise<void> {
    return Promise.resolve();
  }

  async remove(): Promise<void> {
    return Promise.resolve();
  }
}
