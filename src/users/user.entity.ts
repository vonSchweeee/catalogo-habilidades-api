import { Exclude } from 'class-transformer';
import { IsEmail, MinLength } from 'class-validator';
import { Skill } from 'src/skills/skill.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @IsEmail()
  email: string;

  @Column()
  @MinLength(6)
  @Exclude()
  password: string;

  @ManyToMany(() => Skill)
  @JoinTable()
  skills: Skill[];
  
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
