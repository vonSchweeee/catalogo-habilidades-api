import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersSkillsService } from './usersskills.service';
import { CreateUserSkillDto } from './dto/create-usersskill.dto';
import { UpdateUsersSkillDto } from './dto/update-usersskill.dto';
import { BaseCrudController } from 'src/shared/base-crud.controller';
import { UserSkill } from './userskill.entity';

@Controller('usersskills')
export class UsersSkillsController extends BaseCrudController<UserSkill, CreateUserSkillDto, UpdateUsersSkillDto, UsersSkillsService> {
  constructor(private readonly usersSkillsService: UsersSkillsService) {
    super(usersSkillsService);
  }
}
