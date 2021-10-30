import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSkillDto } from './dto/create-skill.dto';
import { UpdateSkillDto } from './dto/update-skill.dto';
import { Skill } from './skill.entity';

@Injectable()
export class SkillsService {
  constructor(
    @InjectRepository(Skill) private skillsRepository: Repository<Skill>
  ) { }

  create(createSkillDto: CreateSkillDto) {
    return this.skillsRepository.save(createSkillDto);
  }

  findAll() {
    return this.skillsRepository.find();
  }

  findOne(id: number) {
    return this.skillsRepository.findOne(id);
  }

  update(id: number, updateSkillDto: UpdateSkillDto) {
    const skill = new Skill(updateSkillDto);
    return this.skillsRepository.update(id, skill);
  }

  remove(id: number) {
    return `This action removes a #${id} skill`;
  }
}
