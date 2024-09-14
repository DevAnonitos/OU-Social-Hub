import prisma from "../configs/prisma.config";
import { Request, Response } from "express";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:2818164491.
export const getAllUsers = async (req: Request, res: Response) => {
   try {
        const users = await prisma.user.findMany();
        res.json(users);
   } catch (error: any) {
        res.status(500).json({ error: error.message });
   }
};