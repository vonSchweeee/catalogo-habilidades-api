import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { }

  async register(registerUserDto: RegisterUserDto) {
    const hashPassword = await bcrypt.hash(registerUserDto.password, 10);
    return this.usersRepository.save({
      email: registerUserDto.email,
      password: hashPassword,
      name: registerUserDto.name
    });
  }
}
