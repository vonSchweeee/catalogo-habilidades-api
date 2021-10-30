import { Exclude } from 'class-transformer';
import { DeleteDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @Exclude()
  @DeleteDateColumn()
  deleteDate: Date | null;

  constructor(partial: Partial<BaseEntity>) {
    Object.assign(this, partial);
  }
}
