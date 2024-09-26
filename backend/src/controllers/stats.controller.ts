import prisma from "../configs/prisma.config";
import { Request, Response } from "express";

export const getUsersCount = async (req: Request, res: Response)=> {
  try {
    const userCount = await prisma.user.count();
    console.log(userCount);
    return res.status(200).json({ 
      count: userCount,
    });
  } catch (error: any) {
    console.error('Error fetching user count:', error);
    return res.status(500).json({ message: 'Failed to fetch user count' });
  }
};

export const getEventsCount = async (req: Request, res: Response) => {
  try {
    const eventCount = await prisma.events.count();
    console.log(eventCount);
    return res.status(200).json({ 
      count: eventCount,
    });
  } catch (error: any) {
    console.error('Error fetching user count:', error);
    return res.status(500).json({ message: 'Failed to fetch user count' });
  }
}