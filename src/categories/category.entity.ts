import { Section } from 'src/sections/section.entity';
import { BaseIdEntity } from 'src/shared/base-id.entity';
import { Skill } from 'src/skills/skill.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';

@Entity('category')
export class Category extends BaseIdEntity {
  @Column({unique: true})
  title: string;

  @Column()
  sectionId: number;

  @ManyToOne(() => Section, section => section.categories, {eager: true})
  section: Section;

  @ManyToMany(() => Skill)
  @JoinTable()
  skills: Skill[];

  constructor(partial: Partial<Section>) {
    super(partial);
    Object.assign(this, partial);
  }
}
