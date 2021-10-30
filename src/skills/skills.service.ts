import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/shared/base-crud.service';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './skill.entity';

@Injectable()
export class SkillsService extends BaseCrudService<Skill, CreateSkillDto, UpdateSkillDto> {
  constructor(
    @InjectRepository(Skill) private skillsRepository: Repository<Skill>
  ) {
    super(skillsRepository);
  }
}
