import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/shared/base-crud.service';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService extends BaseCrudService<User, RegisterUserDto, UpdateUserDto> {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { 
    super(usersRepository);
  }

  async getWithSkills(id: number) {
    const user = await this.usersRepository.findOne(id, {
      relations: ['usersSkills']
    });
    return user;
  }
}
