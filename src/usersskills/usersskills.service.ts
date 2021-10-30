import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserSkillDto } from './dto/create-usersskill.dto';
import { UpdateUsersSkillDto } from './dto/update-usersskill.dto';
import { UserSkill } from './userskill.entity';

@Injectable()
export class UsersSkillsService {
  constructor(
    @InjectRepository(UserSkill) private skillsRepository: Repository<UserSkill>
  ) { }

  create(createUsersSkillDto: CreateUserSkillDto) {
    return 'This action adds a new usersskill';
  }

  findAll() {
    return `This action returns all usersskills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersskill`;
  }

  update(id: number, updateUsersSkillDto: UpdateUsersSkillDto) {
    return `This action updates a #${id} usersskill`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersskill`;
  }
}
