import prisma from "../configs/prisma.config";
import { Request, Response } from "express";

export const createNotification = async (
  userId: string, 
  eventId: string, 
  commentContent: string
) => {
  try {
    const createEntityNotification = await prisma.entityNotification.create({
      data: {
        entityType: "COMMENT",
        entityContent: commentContent,
      },
    });
    console.log(createEntityNotification);

    await prisma.notifications.create({
      data: {
        userId: userId,
        eventsId: eventId,
        entityNotificationId: createEntityNotification.id,
        isRead: false,
      }
    });
  } catch (error: any) {
    console.log("Error creating notification", error);
  }
};

export const getNotifications = async (req: Request, res: Response) => {

  const { userId } = req.params;

  try {
    const getNotifications = await prisma.notifications.findMany({
      where: {
        userId
      },
      include: {
        entityNotification: true,
        events: true,
        users: {
          select: {
            id: true,
            role: true,
            username: true,
          },
        }
      },
      orderBy: {
        createdAt: "desc",
      }
    });
    console.log(getNotifications);
    res.status(200).json(getNotifications);
  } catch (error: any) { 
    console.log("Error getting notifications", error);
    res.status(500).send(error);
  }
};