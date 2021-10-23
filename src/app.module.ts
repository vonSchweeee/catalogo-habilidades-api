import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { SkillsModule } from './skills/skills.module';
import { CategoriesModule } from './categories/categories.module';
import { SectionsModule } from './sections/sections.module';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { SqlErrorFilter } from './filter/sql-error.filter';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'catalogo_habilidades',
      entities: [],
      synchronize: true,
      autoLoadEntities: true
    }),
    UsersModule,
    AuthModule,
    SkillsModule,
    CategoriesModule,
    SectionsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    {
      provide: APP_FILTER,
      useClass: SqlErrorFilter,
    },
  ],
})
export class AppModule {}
