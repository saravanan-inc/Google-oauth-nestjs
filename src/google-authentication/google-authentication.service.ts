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
            url: "https://people.googleapis.com/v1/people/me/connections?personFields=names,phoneNumbers",
            headers: {
                Authorization: `Bearer ${req.user.accessToken}`
            }
        })
        
        const { data: otherContactsData } = await axios({
            method: "GET",
            url: "https://people.googleapis.com/v1/otherContacts?readMask=names,emailAddresses",
            headers: {
                Authorization: `Bearer ${req.user.accessToken}`
            }
        })

        return {
            message: 'User information from google',
            UserSavedContacts: data,
            UserOtherContacts: otherContactsData,
            user: req.user
        }
    }
}