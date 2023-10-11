import { ObjectType, Field, ID, Directive } from '@nestjs/graphql';
import { Like } from './like.entity';

@ObjectType()
@Directive('@extends')
@Directive('@key(fields: "id")')
export class User {
  @Field(() => ID)
  @Directive('@external')
  id: string;

  @Field(() => [Like])
  likes?: Like[];
}
