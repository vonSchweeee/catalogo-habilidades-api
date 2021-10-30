import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/shared/base.service';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './section.entity';

@Injectable()
export class SectionsService extends BaseService<Section, CreateSectionDto, UpdateSectionDto> {
  constructor(
    @InjectRepository(Section) private sectionRepository: Repository<Section>
  ) { 
    super(sectionRepository);
  }
}
