import { IsNotEmpty, MinLength } from 'class-validator';
import { Category } from 'src/categories/category.entity';
import { UserSkill } from 'src/usersskills/userskill.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  @MinLength(3)
  title: string;

  @Column()
  description: string;

  @OneToMany(() => UserSkill, userSkill => userSkill.skill)
  usersSkills!: UserSkill[];

  @ManyToMany(() => Category)
  categories: Category[];

  constructor(partial: Partial<Skill>) {
    Object.assign(this, partial);
  }
}
