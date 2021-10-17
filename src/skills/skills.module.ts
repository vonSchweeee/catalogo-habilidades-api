import { Module } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { SkillsController } from './skills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Skill } from './skill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Skill])],
  exports: [TypeOrmModule, SkillsService],
  controllers: [SkillsController],
  providers: [SkillsService]
})
export class SkillsModule {}
