import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/shared/base-crud.service';
import { Repository } from 'typeorm';
import { CreateUserSkillDto } from './dto/create-usersskill.dto';
import { UpdateUsersSkillDto } from './dto/update-usersskill.dto';
import { UserSkill } from './userskill.entity';

@Injectable()
export class UsersSkillsService extends BaseCrudService<UserSkill, CreateUserSkillDto, UpdateUsersSkillDto> {
  constructor(
    @InjectRepository(UserSkill) private usersSkillsRepository: Repository<UserSkill>
  ) {
    super(usersSkillsRepository);
  }
}
