import { Exclude } from 'class-transformer';
import { IsEmail, MinLength } from 'class-validator';
import { BaseIdTimestampEntity } from 'src/shared/base-id-timestamp.entity';
import { UserSkill } from 'src/usersskills/userskill.entity';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity('user')
export class User extends BaseIdTimestampEntity {
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
  public usersSkills!: Promise<UserSkill[]>;
  
  constructor(partial: Partial<User>) {
    super(partial);
    Object.assign(this, partial);
  }
}
