import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Skill } from "../skills/skill.entity";
import { Max, Min } from 'class-validator';
import { BaseTimestampEntity } from '../shared/base-timestamp.entity';
@Entity()
export class UserSkill extends BaseTimestampEntity {
  @PrimaryColumn('int')
  public userId!: number;

  @PrimaryColumn('int')
  public skillId!: number;

  @Min(1)
  @Max(6)
  @Column('tinyint')
  public nivel!: number;

  @ManyToOne(() => User, user => user.usersSkills, {eager: true})
  public user!: User;

  @ManyToOne(() => Skill, skill => skill.usersSkills, {eager: true})
  public skill!: Skill;

  constructor(partial: Partial<UserSkill>) {
    super(partial);
    Object.assign(this, partial);
  }
}