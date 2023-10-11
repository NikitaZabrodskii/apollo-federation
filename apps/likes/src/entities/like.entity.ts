import { ObjectType, Field, ID } from '@nestjs/graphql';
import { Post } from './post.entity';
import { User } from './user.entity';

@ObjectType()
export class Like {
  @Field(() => ID)
  id: string;

  @Field()
  postId: string;

  @Field()
  authorId: string;

  @Field(() => Post)
  post?: Post;

  @Field(() => User)
  author: User;
}
