import prisma from "../configs/prisma.config";
import { Request, Response } from "express";

export const getUsers = async (req: Request, res: Response) => {
   try {
     const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
      }
     });
     res.json(users);
   } catch (error: any) {
     res.status(500).json({ error: error.message });
   }
};