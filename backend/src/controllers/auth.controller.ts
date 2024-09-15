import prisma from "../configs/prisma.config";
import { Request, Response } from "express";
import { verifyGoogleToken } from "../configs/googleAuth.config";
import { generateToken } from "../helpers/jwt.helper";
import { hashPassWord, comparePassWord } from "../libs/utils/bcrypt.util";

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
        
        res.status(201).send({ accessToken, refreshToken });
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
        if(!user || !user.password) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        
        const isPasswordValid = await comparePassWord(password, user.password);
        if(!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }
        const { accessToken, refreshToken } = generateToken(user);

        res.status(200).send({ accessToken, refreshToken });
    } catch (error: any) {
        console.log("Error during sign-in:", error);
    }
};

export const googleLogin = async (req: Request, res: Response) => {
    const { token } = req.body;

    try {
        const payload = await verifyGoogleToken(token);

        if (!payload) {
            return res.status(400).json({ message: 'Invalid token' });
        }

        let user = await prisma.user.findUnique({ where: { email: payload.email } });
        if (!user) {
            user = await prisma.user.create({
                data: {
                    username: payload.name || '',
                    email: payload.email!,
                    googleId: payload.sub,
                    role: payload.email === process.env.ADMIN_EMAIL ? 'ADMIN' : 'USER',
                },
            });
        }

        const { accessToken, refreshToken } = generateToken(user);
        
        res.status(200).json({ accessToken, refreshToken });
    } catch (error: any) {
        res.status(500).json({ message: 'Internal server error' });
    }
};