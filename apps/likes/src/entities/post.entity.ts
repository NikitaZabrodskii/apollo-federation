import { Directive, Field, ID, ObjectType } from '@nestjs/graphql';
import { Like } from './like.entity';

@ObjectType()
@Directive('@key(fields: "id")')
export class Post {
  @Field(() => ID)
  id: string;

  @Field(() => [Like])
  likes?: Like[] | null;
}
