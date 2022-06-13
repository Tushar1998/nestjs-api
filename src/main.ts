import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { equal } from '@packages/utils';

async function bootstrap() {
  console.log({ equal });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

bootstrap();
