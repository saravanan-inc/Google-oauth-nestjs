import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GoogleStrategy } from './google.strategy';

import { GoogleAuthenticationController } from './google-authentication/google-authentication.controller';
import { GoogleAuthenticationService } from './google-authentication/google-authentication.service';

@Module({
  imports: [],
  controllers: [AppController, GoogleAuthenticationController],
  providers: [AppService, GoogleStrategy, GoogleAuthenticationService],
})
export class AppModule {}
