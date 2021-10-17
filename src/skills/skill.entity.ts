import { Category } from 'src/categories/category.entity';
import { User } from 'src/users/user.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @ManyToMany(() => User) 
  users: User[];

  @ManyToMany(() => Category)
  categories: Category[];

  constructor(partial: Partial<Skill>) {
    Object.assign(this, partial);
  }
}
