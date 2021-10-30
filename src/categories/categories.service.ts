import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/base.service';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService extends BaseService<Category, CreateCategoryDto, UpdateCategoryDto> {
  constructor(
    @InjectRepository(Category) private categoryRepository: Repository<Category>
  ) {
    super(categoryRepository);
  }
}
