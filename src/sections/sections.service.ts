import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseCrudService } from 'src/shared/base-crud.service';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './section.entity';

@Injectable()
export class SectionsService extends BaseCrudService<Section, CreateSectionDto, UpdateSectionDto> {
  constructor(
    @InjectRepository(Section) private sectionRepository: Repository<Section>
  ) { 
    super(sectionRepository);
  }
}
