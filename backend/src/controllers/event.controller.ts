import prisma from "../configs/prisma.config";
import { Request, Response } from "express";
import { CreateUserParams } from "../interfaces";

export const createEvent = async (req: Request, res: Response) => {
  try {
    const { userId, event }: CreateUserParams = req.body;

    const existingEvent = await prisma.events.findFirst({
      where: {
        eventTitle: event.title,
        startDateTime: event.startDateTime,
      },
    });

    if (existingEvent) {
      return res.status(409).json({
        error: "An event already exists."
      });
    }

    const createEvent = await prisma.events.create({
      data: {
        eventTitle: event.title,
        eventDescription: event.description,
        eventLocation: event.location,
        imageUrl: event.imageUrl,
        linkUrl: event.url,
        startDateTime: event.startDateTime,
        endDateTime: event.endDateTime,
        organizerId: userId,
      },
    });
    console.log(createEvent);
    res.status(200).json(createEvent);
  } catch (error: any) {
    console.error(error);
  }
};

export const updateEvent = async (req: Request, res: Response) => {
  try {
    
  } catch (error) {
    console.error(error);
  }
};

export const deleteEvent = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    console.error(error);
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    console.error(error);
  }
};

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    console.error(error);
  }
};

export const getEventByUser = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    console.log(error);
  }
};