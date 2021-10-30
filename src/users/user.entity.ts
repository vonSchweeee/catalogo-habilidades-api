import { Exclude } from 'class-transformer';
import { IsEmail, MinLength } from 'class-validator';
import { Skill } from 'src/skills/skill.entity';
import { UserSkill } from 'src/usersskills/userskill.entity';
import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @IsEmail()
  @Column({unique: true})
  email: string;

  @MinLength(6)
  @Exclude()
  @Column()
  password: string;

  @OneToMany(() => UserSkill, userSkill => userSkill.user)
  public usersSkills!: UserSkill[];
  
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
