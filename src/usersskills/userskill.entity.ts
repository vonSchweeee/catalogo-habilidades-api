import { Entity, Column, ManyToOne, PrimaryColumn, Check } from 'typeorm';
import { User } from '../users/user.entity';
import { Skill } from "../skills/skill.entity";
import { Max, Min } from 'class-validator';
@Entity()
export class UserSkill {
  @PrimaryColumn('int')
  public userId!: number;

  @PrimaryColumn('int')
  public skillId!: number;

  @Min(1)
  @Max(6)
  @Column('tinyint')
  public nivel!: number;

  @ManyToOne(() => User, user => user)
  public user!: User;

  @ManyToOne(() => Skill, skill => skill.usersSkills)
  public skill!: Skill;
}