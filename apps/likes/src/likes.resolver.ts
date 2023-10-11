import {
  Resolver,
  Query,
  Mutation,
  Args,
  Parent,
  ResolveField,
  ResolveReference,
} from '@nestjs/graphql';
import { LikesService } from './likes.service';
import { Like } from './entities/like.entity';
import { CreateLikeInput } from './dto/create-like.input';
import { Post } from './entities/post.entity';
import { User } from './entities/user.entity';

@Resolver(() => Like)
export class LikesResolver {
  constructor(private readonly likesService: LikesService) {}

  @Mutation(() => Like)
  createLike(@Args('createLikeInput') createLikeInput: CreateLikeInput) {
    return this.likesService.create(createLikeInput);
  }

  @Query(() => [Like], { name: 'likes' })
  findAll() {
    return this.likesService.getAll();
  }

  @Query(() => Like, { name: 'like' })
  findOne(@Args('id') id: string) {
    return this.likesService.findOne(id);
  }

  @ResolveField(() => Post)
  post(@Parent() like: Like) {
    return { __typename: 'Post', id: like.postId };
  }

  @ResolveField(() => User)
  user(@Parent() like: Like) {
    return { __typename: 'Post', id: like.authorId };
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string; id: string }): User {
    return this.likesService.findOne(reference.id);
  }
}
