import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateLikeInput {
  @Field()
  id: string;

  @Field()
  postId: string;

  @Field()
  authorId: string;
}
