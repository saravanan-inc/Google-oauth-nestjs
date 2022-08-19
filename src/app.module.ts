import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GoogleStrategy } from './google.strategy';

import { GoogleAuthenticationController } from './google-authentication/google-authentication.controller';
import { GoogleAuthenticationService } from './google-authentication/google-authentication.service';
import { AppleAuthenticationController } from './apple-authentication/apple-authentication.controller';
import { AppleAuthenticationService } from './apple-authentication/apple-authentication.service';
import { AppleStrategy } from './apple.strategy';

@Module({
  imports: [],
  controllers: [AppController, GoogleAuthenticationController, AppleAuthenticationController],
  providers: [AppService, GoogleStrategy, AppleStrategy, GoogleAuthenticationService, AppleAuthenticationService],
})
export class AppModule {}
