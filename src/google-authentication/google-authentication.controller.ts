import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GoogleAuthenticationService } from './google-authentication.service';

@Controller('google')
export class GoogleAuthenticationController {
  constructor(private googleAuthenticationService: GoogleAuthenticationService) { }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) { }

  @Get('redirect')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.googleAuthenticationService.googleLogin(req)
  }
}
