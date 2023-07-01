import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/login')
  googleLogin(@Res() res: Response) {
    return res.redirect(`/login.html`);
  }

  @Get('google')
  @UseGuards(AuthGuard('google'))
  googleAuth() {
    return;
  }

  @Get('google/auth')
  @UseGuards(AuthGuard('google'))
  getGoogle(@Req() req: Request, @Res() res: Response) {
    console.log(26, req.user);
    return res.redirect(`/login-success.html`);
  }
}
