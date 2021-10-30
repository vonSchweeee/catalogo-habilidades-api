import { Exclude } from 'class-transformer';
import { DeleteDateColumn, BaseEntity as BaseTypeORMEntity } from 'typeorm';

export abstract class BaseEntity extends BaseTypeORMEntity {
  @Exclude()
  @DeleteDateColumn()
  deleteDate: Date | null;

  constructor(partial: Partial<BaseEntity>) {
    super();
    Object.assign(this, partial);
  }
}
