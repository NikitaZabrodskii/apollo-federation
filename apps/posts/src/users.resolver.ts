import { PostsService } from './posts.service';
import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { Post } from './entities/post.entity';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly postService: PostsService) {}

  @ResolveField(() => [Post])
  posts(@Parent() user: User) {
    return this.postService.forAuthor(user.id);
  }
}
