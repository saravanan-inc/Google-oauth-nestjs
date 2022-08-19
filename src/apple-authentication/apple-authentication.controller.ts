import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppleAuthenticationService } from './apple-authentication.service';

@Controller('apple-authentication')
export class AppleAuthenticationController {
    constructor(private appleAuthenticationService: AppleAuthenticationService) { }

    @Get()
    @UseGuards(AuthGuard('google'))
    async googleAuth(@Req() req) { }

    @Get('redirect')
    @UseGuards(AuthGuard('google'))
    googleAuthRedirect(@Req() req) {
        return this.appleAuthenticationService.appleLogin(req)
    }
}
