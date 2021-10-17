import { Category } from 'src/categories/category.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('section')
export class Section {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(() => Category, category => category.section)
  categories: Category[];

  constructor(partial: Partial<Section>) {
    Object.assign(this, partial);
  }
}
