import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { User } from './user.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  @Directive('@shareable')
  id: string;

  @Field()
  body: string;

  @Field()
  authorId: string;

  @Field(() => User)
  user?: User;
}
