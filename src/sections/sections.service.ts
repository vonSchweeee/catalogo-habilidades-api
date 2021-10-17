import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateSectionDto } from './dto/create-section.dto';
import { UpdateSectionDto } from './dto/update-section.dto';
import { Section } from './section.entity';

@Injectable()
export class SectionsService {
  constructor(
    @InjectRepository(Section) private sectionRepository: Repository<Section>
  ) { }

  create(createSectionDto: CreateSectionDto) {
    return this.sectionRepository.save(createSectionDto);
  }

  findAll() {
    return this.sectionRepository.find();
  }

  findOne(id: number) {
    return this.sectionRepository.findOne(id);
  }

  update(id: number, updateSectionDto: UpdateSectionDto) {
    return this.sectionRepository.save({
      id: id,
      ...updateSectionDto
    });
  }

  remove(id: number) {
    return this.sectionRepository.remove(new Section({id}));
  }
}
