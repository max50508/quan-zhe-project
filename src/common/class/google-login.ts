import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-google-oauth2';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_LOGIN_CALLBACKURL,
      scope: ['profile'],
    });
  }

  async validate(accessToken: string, refreshToken: string, profile: any) {
    console.log(17, accessToken);
    console.log(18, refreshToken);
    console.log(19, profile);

    return {
      displayName: profile.displayName,
      id: profile.id,
      avatar: profile.picture,
    };
  }
}
