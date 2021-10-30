import { Category } from 'src/categories/category.entity';
import { BaseIdEntity } from 'src/shared/base-id.entity';
import { UserSkill } from 'src/usersskills/userskill.entity';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';

@Entity('skill', {})
export class Skill extends BaseIdEntity {
  @Column()
  title: string;

  @Column()
  description: string;

  @OneToMany(() => UserSkill, userSkill => userSkill.skill)
  usersSkills!: UserSkill[];

  @ManyToMany(() => Category)
  categories: Category[];

  constructor(partial: Partial<Skill>) {
    super(partial);
    Object.assign(this, partial);
  }
}
