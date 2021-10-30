import { Controller, Get, Body, Patch, Param, Delete, Post, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { Skill } from 'src/skills/skill.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get(':id/skills')
  getWithSkills(@Param('id') id: string) {
    return this.usersService.getWithSkills(+id);
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.usersService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.usersService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.usersService.remove(+id);
  // }
}
