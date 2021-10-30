import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/base.service';
import { Repository } from 'typeorm';
import { RegisterUserDto } from './dto/register-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.entity';

@Injectable()
export class UsersService extends BaseService<User, RegisterUserDto, UpdateUserDto> {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { 
    super(usersRepository);
  }
}
