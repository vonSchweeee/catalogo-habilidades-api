import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersskillDto } from './create-usersskill.dto';

export class UpdateUsersskillDto extends PartialType(CreateUsersskillDto) {}
