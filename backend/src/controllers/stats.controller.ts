import prisma from "../configs/prisma.config";
import { Request, Response } from "express";

export const getUsersCount = async (req: Request, res: Response)=> {
  try {
    const userCount = await prisma.user.count({
      where: {
        id: {
          not: undefined,
        }
      }
    });
    console.log(userCount);
    res.status(200).json({ 
      count: userCount,
    });
  } catch (error: any) {
    console.error('Error fetching user count:', error);
    res.status(500).json({ message: 'Failed to fetch user count' });
  }
};

export const getEventsCount = async (req: Request, res: Response) => {
  try {
    const eventCount = await prisma.events.count({
      where: {
        id: {
          not: undefined,
        }
      }
    });
    console.log(eventCount);
    return res.status(200).json({ 
      count: eventCount,
    });
  } catch (error: any) {
    console.error('Error fetching user count:', error);
    return res.status(500).json({ message: 'Failed to fetch user count' });
  }
}