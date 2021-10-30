import { Category } from 'src/categories/category.entity';
import { User } from 'src/users/user.entity';
import { UserSkill } from 'src/usersskills/userskill.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('skill')
export class Skill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @OneToMany(() => UserSkill, userSkill => userSkill.skill)
  public usersSkills!: UserSkill[];

  @ManyToMany(() => Category)
  categories: Category[];

  constructor(partial: Partial<Skill>) {
    Object.assign(this, partial);
  }
}
