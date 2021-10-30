import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SkillsService } from './skills.service';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { BaseCrudController } from 'src/shared/base-crud.controller';
import { Skill } from './skill.entity';

@Controller('skills')
export class SkillsController extends BaseCrudController<Skill, CreateSkillDto, UpdateSkillDto, SkillsService> {
  constructor(private readonly skillsService: SkillsService) {
    super(skillsService);
  }
}

