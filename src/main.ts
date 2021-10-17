import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

import 'reflect-metadata';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  app.useGlobalPipes(new ValidationPipe({
    exceptionFactory: (errors) => {
      throw errors[0];
    }
  }));
  await app.listen(3000);
}
bootstrap();
