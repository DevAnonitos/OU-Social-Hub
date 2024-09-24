import prisma from "../configs/prisma.config";
import { Request, Response } from "express";
import redisClient from "../configs/redis.config";

export const getUsers = async (req: Request, res: Response) => {
  try {
    const cacheKey = "users";
    const cachedUsers = await redisClient.get(cacheKey);

    if (cachedUsers) {
      console.log("Serving cached users");
      return res.json(JSON.parse(cachedUsers));
    }
    const users = await prisma.user.findMany({
      select: {
        id: true,
        username: true,
        email: true,
      }
    });

    await redisClient.set(cacheKey, JSON.stringify(users), {
      EX: 60 * 60, // Cache expires in 1 hour
    });

    console.log("Serving fresh users");
    res.json(users);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};