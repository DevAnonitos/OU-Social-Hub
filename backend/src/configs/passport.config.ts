import passport from "passport";
import OAuth2Strategy from "passport-oauth2";
import prisma from "./prisma.config";

passport.use(
  new OAuth2Strategy(
    {
      authorizationURL: "http://localhost:8000",
      tokenURL: "http://localhost:8000",
      clientID: process.env.EXAMPLE_CLIENT_SECRET!,
      clientSecret: process.env.EXAMPLE_CLIENT_SECRET!,
      callbackURL: "http://localhost:3000/auth/example/callback"
    },
    async (accessToken: string, refreshToke: string, profile: string, done: string) => {
      try {
        
      } catch (error: any) {
        
      }
    }
  )
)

