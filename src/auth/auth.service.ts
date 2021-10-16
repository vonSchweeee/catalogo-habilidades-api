import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { User } from 'src/users/user.entity';
import { Repository } from 'typeorm';

import * as bcrypt from 'bcrypt';
import { LoginUserDto } from 'src/users/dto/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) { }
    
  async register(registerUserDto: RegisterUserDto) {
    const hashPassword = await bcrypt.hash(registerUserDto.password, 10);
    const user = new User({
      email: registerUserDto.email,
      password: hashPassword,
      name: registerUserDto.name
    });
    return this.usersRepository.save(user);
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersRepository.findOne(undefined, {
      where: {email: email}
    });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        return user;
      } else {  
        throw new HttpException('Senha incorreta!', HttpStatus.FORBIDDEN);
      }
    } 
    else {
      throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);
    }
  }
}
