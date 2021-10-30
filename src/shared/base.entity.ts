import { DeleteDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @DeleteDateColumn()
  deleteDate: Date;

  constructor(partial: Partial<BaseEntity>) {
    Object.assign(this, partial);
  }
}
