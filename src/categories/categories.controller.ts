import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseCrudController } from 'src/shared/base-crud.controller';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Controller('categories')
export class CategoriesController extends BaseCrudController<Category, CreateCategoryDto, UpdateCategoryDto, CategoriesService> {
  constructor(private readonly categoriesService: CategoriesService) {
    super(categoriesService);
  }
}
