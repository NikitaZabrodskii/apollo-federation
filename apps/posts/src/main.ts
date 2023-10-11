import { NestFactory } from '@nestjs/core';
import { PostsModule } from './posts.module';

async function bootstrap() {
  const app = await NestFactory.create(PostsModule);
  await app.listen(4444, () => {
    console.log('[PostModule] has beed started');
  });
}
bootstrap();
