import { CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { BaseIdEntity } from './base-id.entity';

export abstract class BaseIdTimestampEntity extends BaseIdEntity {
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
