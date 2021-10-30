import { IsDefined, IsNotEmpty } from 'class-validator';

export class CreateCategoryDto {
  @IsNotEmpty()
  title: string;

  @IsDefined()
  sectionId: number;
}
