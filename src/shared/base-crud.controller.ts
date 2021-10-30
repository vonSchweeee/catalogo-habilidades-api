import { Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BaseEntity } from './base.entity';
import { BaseCrudService } from './base-crud.service';

export abstract class BaseCrudController<Entity extends BaseEntity, CreateDto, UpdateDto, Service extends BaseCrudService<Entity, CreateDto, UpdateDto>> {
  constructor(private readonly service: Service) {}

  @Post()
  create(@Body() createDto: CreateDto) {
    return this.service.create(createDto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.service.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateDto) {
    return this.service.update(+id, updateDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.service.remove(+id);
  }
}
