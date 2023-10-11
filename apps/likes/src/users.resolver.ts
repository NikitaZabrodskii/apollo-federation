import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { LikesService } from './likes.service';
import { Like } from './entities/like.entity';
import { User } from './entities/user.entity';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly likesService: LikesService) {}

  @ResolveField(() => [Like])
  likes(@Parent() user: User) {
    return this.likesService.findAll(user.id);
  }
}
