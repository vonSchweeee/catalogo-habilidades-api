import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/base.service';
import { Repository } from 'typeorm';
import { CreateUserSkillDto } from './dto/create-usersskill.dto';
import { UpdateUsersSkillDto } from './dto/update-usersskill.dto';
import { UserSkill } from './userskill.entity';

@Injectable()
export class UsersSkillsService extends BaseService<UserSkill, CreateUserSkillDto, UpdateUsersSkillDto> {
  constructor(
    @InjectRepository(UserSkill) private usersSkillsRepository: Repository<UserSkill>
  ) { 
    super(usersSkillsRepository);
  }
}
