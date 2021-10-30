import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersSkillsService } from './usersskills.service';
import { CreateUsersskillDto } from './dto/create-usersskill.dto';
import { UpdateUsersskillDto } from './dto/update-usersskill.dto';

@Controller('usersskills')
export class UsersSkillsController {
  constructor(private readonly usersskillsService: UsersSkillsService) {}

  @Post()
  create(@Body() createUsersskillDto: CreateUsersskillDto) {
    return this.usersskillsService.create(createUsersskillDto);
  }

  @Get()
  findAll() {
    return this.usersskillsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersskillsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUsersskillDto: UpdateUsersskillDto) {
    return this.usersskillsService.update(+id, updateUsersskillDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersskillsService.remove(+id);
  }
}
