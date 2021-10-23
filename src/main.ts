import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

import 'reflect-metadata';
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { SqlErrorFilter } from './filter/sql-error.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExceptionFilter(), new SqlErrorFilter());
  app.useGlobalInterceptors(new ClassSerializerInterceptor(app.get(Reflector)));
  await app.listen(3000);
}
bootstrap();
