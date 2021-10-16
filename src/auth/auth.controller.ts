import { Body, Controller, HttpCode, Post, Request, UseGuards } from '@nestjs/common';
import { RegisterUserDto } from 'src/users/dto/register-user.dto';
import { User } from 'src/users/user.entity';
import { AuthService } from './auth.service';
import { Public } from './jwt-auth.guard';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
@Public()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('register')
  async register(@Body() registerUserDto: RegisterUserDto) {
    return await this.authService.register(registerUserDto);
  }

  @Post('login')
  @HttpCode(200)
  @UseGuards(LocalAuthGuard)
  async login(@Request() req: {user: User}) {
    return this.authService.login(req.user);
  }
}
