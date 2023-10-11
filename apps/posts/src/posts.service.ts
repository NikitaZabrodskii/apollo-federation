import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';

@Injectable()
export class PostsService {
  private readonly posts: CreatePostInput[] = [];
  create(createPostInput: CreatePostInput) {
    this.posts.push(createPostInput);
    return createPostInput;
  }

  findAll() {
    return this.posts;
  }

  findOne(id: string) {
    return this.posts.find((post) => post.id === id);
  }

  forAuthor(authorId: string) {
    return this.posts.filter((post) => post.authorId === authorId);
  }
}
