import { Request, Response } from "express";
import { verifyGoogleToken } from "../configs/googleAuth.config";
import prisma from "../configs/prisma.config";

export const signUp = async (req: Request, res: Response) => {

    const { username, email, password } = req.body;

    try {
        // Your signup logic will go here
        const user = await prisma.user.create({
            data: {
                username,
                email,
                password,
                role: email === process.env.ADMIN_EMAIL ? "ADMIN" : "USER",
            }
        })
        
        res.json({ message: "Hello API" });
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
    } catch (error: any) {
        console.log("Error during sign-in:", error);
    }
};

export const googleLogin = async (req: Request, res: Response) => {
    
};