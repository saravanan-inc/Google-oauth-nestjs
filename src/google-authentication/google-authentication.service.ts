import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class GoogleAuthenticationService {
    async googleLogin(req) {
        if (!req.user) {
            return 'No user from google'
        }


        const { data } = await axios({
            method: "GET",
            url: "https://people.googleapis.com/v1/people/me/connections?personFields=emailAddresses,phoneNumbers",
            headers: {
                Authorization: `Bearer ${req.user.accessToken}`
            }
        })

        return {
            data: data,
            message: 'User information from google',
            user: req.user
        }
    }
}