import { Repository } from 'typeorm';
import { BaseEntity } from './base.entity';

export class BaseService<Entity extends BaseEntity, CreateDto, UpdateDto> {
  constructor(
    private repository: Repository<Entity>
  ) { }
  
  create(createDto: CreateDto) {
    const e = this.repository.create(createDto);
    return e.save();
  }

  findAll() {
    return this.repository.find();
  }

  findOne(id: number) {
    return this.findOne(id);
  }

  update(id: number, updateDto: UpdateDto) {
    return this.update(id, updateDto);
  }

  remove(id: number) {
    return this.repository.softDelete(id);
  }
}
