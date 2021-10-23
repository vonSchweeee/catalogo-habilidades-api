import { IsEmail, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsEmail(undefined, {message: 'Insira um e-mail válido!'})
  public email: string;

  @MinLength(3)
  public name: string;

  @MinLength(6)
  public password: string;
}
