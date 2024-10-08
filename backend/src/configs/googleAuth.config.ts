import { OAuth2Client } from 'google-auth-library';

const redirectUrl ="http://localhost:4000/api/v1/auth/google/"

const client = new OAuth2Client(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET_KEY,
  redirectUrl,
);

export const verifyGoogleToken = async (token: string) => {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: process.env.GOOGLE_CLIENT_ID,
  });    
  
  const payload = ticket.getPayload()
  console.log(payload);
  return payload;
};