import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule, { cors: true });
  await app.listen(5555, () => {
    console.log('[UserModule] has beed started');
  });
}

bootstrap();
