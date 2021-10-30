import { Category } from 'src/categories/category.entity';
import { BaseIdEntity } from 'src/shared/base-id.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('section')
export class Section extends BaseIdEntity {
  @Column()
  title: string;

  @OneToMany(() => Category, category => category.section)
  categories: Category[];

  constructor(partial: Partial<Section>) {
    super(partial);
    Object.assign(this, partial);
  }
}
