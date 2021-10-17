import { Module } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { SectionsController } from './sections.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Section } from './section.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Section])],
  exports: [TypeOrmModule, SectionsService],
  controllers: [SectionsController],
  providers: [SectionsService]
})
export class SectionsModule {}
