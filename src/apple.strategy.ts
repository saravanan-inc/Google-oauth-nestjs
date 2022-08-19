import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-appleid';
import { config } from 'dotenv';

import { Injectable } from '@nestjs/common';
import path from 'path';

config();

@Injectable()
export class AppleStrategy extends PassportStrategy(Strategy, 'apple') {
    constructor() {
        super({
            clientID: process.env.APPLE_SERVICE_ID,
            callbackURL: 'https://www.example.net/auth/apple/callback',
            teamId: process.env.APPLE_TEAM_ID,
            keyIdentifier: 'RB1233456',
            privateKeyPath: path.join(__dirname, "./AuthKey_RB1233456.p8")
        });
    }

    async validate (accessToken: string, refreshToken: string, profile: any, done: VerifyCallback): Promise<any> {
        const { name, emails, photos } = profile
        const user = {
          email: emails[0].value,
          firstName: name.givenName,
          lastName: name.familyName,
          picture: photos[0].value,
          accessToken
        }
        done(null, user);
      }
}