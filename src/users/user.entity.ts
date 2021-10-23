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

  @IsEmail()
  @Column({unique: true})
  email: string;

  @MinLength(6)
  @Exclude()
  @Column()
  password: string;

  @ManyToMany(() => Skill)
  @JoinTable()
  skills: Skill[];
  
  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
