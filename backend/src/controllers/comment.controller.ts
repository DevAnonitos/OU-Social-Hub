import prisma from "../configs/prisma.config";
import { Request, Response } from "express";
import { createCommentParams } from "../interfaces";

export const createComment = async (req: Request, res: Response) => {

  const { userId, comment, eventId, }: createCommentParams = req.body;

  try {
    const createComment = await prisma.comments.create({
      data: {
        userId: userId,
        eventId: eventId,
        content: comment.content,
        parentId: comment.parentId,
      },
      include: {
       
      }
    })
  } catch (error: any) {
    
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