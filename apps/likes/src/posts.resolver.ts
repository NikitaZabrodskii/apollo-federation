import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { Post } from './entities/post.entity';
import { LikesService } from './likes.service';
import { Like } from './entities/like.entity';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly likesService: LikesService) {}

  @ResolveField(() => [Like])
  likes(@Parent() post: Post) {
    return this.likesService.findAll(post.id);
  }
}
