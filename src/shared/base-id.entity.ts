import { PrimaryGeneratedColumn } from 'typeorm';
import { BaseEntity } from './base.entity';

export abstract class BaseIdEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}
