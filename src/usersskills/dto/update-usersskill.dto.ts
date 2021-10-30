import { PartialType } from '@nestjs/mapped-types';
import { CreateUserSkillDto } from './create-usersskill.dto';

export class UpdateUsersSkillDto extends PartialType(CreateUserSkillDto) {}
