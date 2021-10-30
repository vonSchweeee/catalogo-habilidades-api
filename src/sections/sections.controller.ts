import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SectionsService } from './sections.service';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { BaseCrudController } from 'src/shared/base-crud.controller';
import { Section } from './section.entity';

@Controller('sections')
export class SectionsController extends BaseCrudController<Section, CreateSectionDto, UpdateSectionDto, SectionsService> {
  constructor(private readonly sectionsService: SectionsService) {
    super(sectionsService);
  }
}
