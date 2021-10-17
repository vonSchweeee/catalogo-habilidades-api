import { Section } from 'src/sections/section.entity';
import { Skill } from 'src/skills/skill.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToOne(() => Section)
  section: Section;

  @ManyToMany(() => Skill)
  @JoinTable()
  skills: Skill[];
}
