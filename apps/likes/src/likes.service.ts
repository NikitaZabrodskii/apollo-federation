import { Injectable } from '@nestjs/common';
import { CreateLikeInput } from './dto/create-like.input';

@Injectable()
export class LikesService {
  private readonly likes: CreateLikeInput[] = [];
  create(createLikeInput: CreateLikeInput) {
    this.likes.push(createLikeInput);
    return createLikeInput;
  }

  findAll(id: string) {
    return this.likes.filter((like) => like.id === id);
  }

  getAll() {
    return this.likes;
  }

  findOne(id: string) {
    return this.likes.find((like) => like.id === id);
  }
}
