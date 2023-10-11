import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import {
  ApolloFederationDriver,
  ApolloFederationDriverConfig,
} from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import { LikesResolver } from './likes.resolver';
import { PostsResolver } from './posts.resolver';
import { UsersResolver } from './users.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloFederationDriverConfig>({
      driver: ApolloFederationDriver,
      playground: true,
      autoSchemaFile: {
        federation: 2,
      },
    }),
  ],
  providers: [LikesResolver, LikesService, PostsResolver, UsersResolver],
})
export class LikesModule {}
