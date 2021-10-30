import { Section } from 'src/sections/section.entity';
import { BaseIdEntity } from 'src/shared/base-id.entity';
import { Skill } from 'src/skills/skill.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity('category')
export class Category extends BaseIdEntity {
  @Column()
  title: string;

  @ManyToOne(() => Section)
  section: Section;

  @ManyToMany(() => Skill)
  @JoinTable()
  skills: Skill[];
}
