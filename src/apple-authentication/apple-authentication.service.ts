import { Injectable } from '@nestjs/common';

@Injectable()
export class AppleAuthenticationService {
    appleLogin(req) {
        if (!req.user) {
            return 'No user from apple'
        }

        return {
            message: 'User information from apple',
            user: req.user
        }
    }
}
