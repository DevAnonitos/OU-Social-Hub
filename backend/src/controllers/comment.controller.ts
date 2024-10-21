import prisma from "../configs/prisma.config";
import { Request, Response } from "express";
import { createCommentParams } from "../interfaces";

import { createNotification } from './notification.controller';
import { notification } from "../configs/socket.config"

export const createComment = async (req: Request, res: Response) => {

  const { userId, eventId, comment }: createCommentParams = req.body;

  try {
    const createComment = await prisma.comments.create({
      data: {
        userId: userId,
        eventId: eventId,
        content: comment.content,
        parentId: comment.parentId ?? null,
      },
      include: {
        replies: true,
      }
    });
    console.log(createComment);

    await createNotification(createComment.userId, createComment.eventId, createComment.content);

    notification({
      eventId: createComment.eventId,
      content: createComment.content,
      userId: createComment.userId,
    });
    
    res.status(200).send(createComment);
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const getAllComments = async (req: Request, res: Response) => {
  const { eventId } = req.params;

  try {
    const comments = await prisma.comments.findMany({
      where: {
        eventId: eventId,
      },
      include: {
        user: true,
        replies: true,
      },
    });

    const commentCount = await prisma.comments.count({
      where: {
        eventId: eventId,
      },
    });

    res.status(200).send({
      comments,
      commentCount,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).send(error);
  }
};

export const updateComment = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    
  }
};

export const deleteComment = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    
  }
};