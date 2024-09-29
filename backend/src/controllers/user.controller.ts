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

export const getUserById = async (req: Request, res: Response) => {
  try {
    
    const { userId } =req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    console.log(user);
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user by ID", error);
    res.status(500).json({ error: "Failed to fetch user data" });
  }
};

export const getUsersByMonth = async (req: Request, res: Response) => {
  try {
    const currentYear = new Date().getFullYear();

    const userCount = await prisma.user.groupBy({
      by: ["createAt"], 
      _count: {
        id: true,
      },
      where: {
        createAt: {
          gte: new Date(`${currentYear}-01-01T00:00:00.000Z`),
          lt: new Date(`${currentYear + 1}-01-01T00:00:00.000Z`),
        },
      },
    });

    const months = Array.from({ length: 12 }, (_, index) => {
      const monthDate = new Date(currentYear, index);
      const monthName = monthDate.toLocaleString("default", { month: "long" });

      const monthData = userCount.filter((uc) => {
        const createdMonth = new Date(uc.createAt).getMonth();
        return createdMonth === index;
      });

      const totalCount = monthData.reduce((total, uc) => total + uc._count.id, 0);

      return {
        month: monthName,
        count: totalCount,
      };
    });

    res.status(200).json({ data: months });
  } catch (error: any) {
    console.error("Error fetching user counts by month", error);
    res.status(500).json({ error: "Failed to fetch data" });
  }
};