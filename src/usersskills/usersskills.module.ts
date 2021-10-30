import { Module } from '@nestjs/common';
import { UsersSkillsService } from './usersskills.service';
import { UsersSkillsController } from './usersskills.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserSkill } from './userskill.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserSkill])],
  exports: [TypeOrmModule, UsersSkillsService],
  controllers: [UsersSkillsController],
  providers: [UsersSkillsService]
})
export class UsersSkillsModule {}
