import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Skill } from "../skills/skill.entity";
@Entity()
export class UserSkill {
  @PrimaryColumn('int')
  public userId!: number;

  @PrimaryColumn('int')
  public skillId!: number;

  @Column()
  public nivel!: number;

  @ManyToOne(() => User, user => user)
  public user!: User;

  @ManyToOne(() => Skill, skill => skill.usersSkills)
  public skill!: Skill;
}