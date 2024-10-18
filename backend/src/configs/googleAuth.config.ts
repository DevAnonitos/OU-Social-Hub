import { OAuth2Client } from 'google-auth-library';

const googleConfig = {
  clientId: process.env.GOOGLE_CLIENT_ID || '',
  clientSecret: process.env.GOOGLE_CLIENT_SECRET_KEY || '',
  redirectUri: `${process.env.BASE_URL}/api/v1/auth/google/callback`, // Your callback URL
};

export const client = new OAuth2Client(
  googleConfig.clientId,
  googleConfig.clientSecret,
  googleConfig.redirectUri,
);

