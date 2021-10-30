import { Injectable } from '@nestjs/common';
import { CreateUsersskillDto } from './dto/create-usersskill.dto';
import { UpdateUsersskillDto } from './dto/update-usersskill.dto';

@Injectable()
export class UsersSkillsService {
  create(createUsersskillDto: CreateUsersskillDto) {
    return 'This action adds a new usersskill';
  }

  findAll() {
    return `This action returns all usersskills`;
  }

  findOne(id: number) {
    return `This action returns a #${id} usersskill`;
  }

  update(id: number, updateUsersskillDto: UpdateUsersskillDto) {
    return `This action updates a #${id} usersskill`;
  }

  remove(id: number) {
    return `This action removes a #${id} usersskill`;
  }
}
