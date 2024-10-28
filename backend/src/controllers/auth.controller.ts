import prisma from "../configs/prisma.config";
import { Request, Response } from "express";
import { generateToken } from "../helpers/jwt.helper";
import { hashPassWord, comparePassWord } from "../libs/utils/bcrypt.util";
import { verifyRefreshToken } from "../libs/utils/token.util";

import { generateAccessToken, generateRefreshToken } from "../libs/utils/token.util";
import axios from "axios";

import { JwtPayload } from 'jsonwebtoken';
export const signUp = async (req: Request, res: Response) => {

    const { username, email, password } = req.body;

    try {
        
        const checkUser = await prisma.user.findMany({
            where: {
                OR: [
                    { username },
                    { email }
                ]
            }
        });
        if(checkUser.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const hashPassword = await hashPassWord(password);

        

        const user = await prisma.user.create({
            data: {
                username,
                email,
                password: hashPassword,
                role: email === process.env.ADMIN_EMAIL ? "ADMIN" : "USER",
            }
        });
        console.log(user)
        const { accessToken, refreshToken } = generateToken(user);
        
        res.status(201).send({ 
            accessToken, 
            refreshToken,
            id: user.id, 
            username: user.username,
            role: user.role,
        });
    } catch (error: any) {
        console.error("Error during sign-up:", error);
        res.status(500).json({ error: "Error during sign-up" });
    }
};

export const signIn = async (req: Request, res: Response) => {
    
    const { username, password } = req.body;

    try {
        const user = await prisma.user.findUnique({
            where: {
                username,
            },
        });
        console.log(user);
        if(!user || !user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        const isPasswordValid = await comparePassWord(password, user.password);
        if(!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const { accessToken, refreshToken } = generateToken(user);

        res.status(200).send({ 
            accessToken, 
            refreshToken, 
            id: user.id, 
            username: user.username,
            role: user.role,
        });
    } catch (error: any) {
        console.log("Error during sign-in:", error);
    }
};

export const googleLogin = (req: Request, res: Response) => {
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const redirectUri = `${process.env.BASE_URL}/api/v1/auth/google/callback`; // Updated for your API route
    const scope = 'https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email';
  
    const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&access_type=offline&prompt=consent`;
  
    
    res.redirect(googleAuthUrl);
};
  

export const googleCallback = async (req: Request, res: Response) => {
    const code = req.query.code as string;
    const clientId = process.env.GOOGLE_CLIENT_ID;
    const clientSecret = process.env.GOOGLE_CLIENT_SECRET_KEY;
    const redirectUri = `${process.env.BASE_URL}/api/v1/auth/google/callback`; // Updated for your API route

    try {
        // Exchange the authorization code for an access token
        const tokenResponse = await axios.post('https://oauth2.googleapis.com/token', {
            code,
            client_id: clientId,
            client_secret: clientSecret,
            redirect_uri: redirectUri,
            grant_type: 'authorization_code',
        }, {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        });

        const { access_token } = tokenResponse.data;

        // Use the access token to get user info from Google
        const userInfoResponse = await axios.get('https://www.googleapis.com/oauth2/v1/userinfo', {
            headers: { Authorization: `Bearer ${access_token}` },
        });

        const profile = userInfoResponse.data;

        // Now, check if the user exists in the database
        let user = await prisma.user.findUnique({
            where: { googleId: profile.id },
        });

        if (!user) {
            // Create a new user if they don't exist
            user = await prisma.user.create({
                data: {
                    username: profile.name,
                    email: profile.email,
                    googleId: profile.id,
                    avatarUrl: profile.picture,
                },
            });
        }

        const { accessToken, refreshToken } = generateToken(user);

        // Respond with the access token, refresh token, and user info
        res.status(200).send({
            accessToken,
            refreshToken,
            user: {
                id: user.id,
                username: user.username,
                email: user.email,
                avatarUrl: user.avatarUrl,
                role: user.role,
            },
        });
    } catch (error) {
        console.error("Error during Google OAuth:", error);
        res.status(500).send({ message: "Authentication failed" });
    }
};

export const refreshToken = async (req: Request, res: Response) => {

    const { refreshToken } = req.body;

    try {
        const decoded: JwtPayload = verifyRefreshToken(refreshToken) as JwtPayload;

        if (!decoded || typeof decoded === 'string' || typeof decoded.exp === 'undefined') {
            throw new Error('Invalid token');
        }


        const user = await prisma.user.findUnique({
            where: { 
                id: decoded.id 
            },
        });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }
    
        const accessToken = generateAccessToken({ id: user.id, role: user.role });
    
        const remainingTime = decoded.exp * 1000 - Date.now();
        const sevenDays = 7 * 24 * 60 * 60 * 1000;
        let newRefreshToken = refreshToken;
    
        if (remainingTime < sevenDays) {
            newRefreshToken = generateRefreshToken({ 
                id: user.id, 
                role: user.role 
            });
        }
    
        return res.status(200).json({
            accessToken,
            refreshToken: newRefreshToken,
        });
    } catch (error: any) {
        return res.status(403).json({
            message: "Invalid or expired refresh token",
        });
    }
};