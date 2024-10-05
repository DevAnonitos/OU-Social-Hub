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
        categoryIds: event.categoryIds,
        endDateTime: event.endDateTime,
        organizerId: userId,
        status: "PENDING",
      },
    });
    console.log(createEvent);
    res.status(200).json(createEvent);
  } catch (error: any) {
    console.error(error);
  }
};

export const approveEvent = async (req: Request, res: Response) => {

  const { eventId } = req.params;

  try {
    const event = await prisma.events.update({
      where: {
        id: eventId,
      },
      data: {
        status: "APPROVED",
      }, 
    });
    console.log(event);
    res.status(200).json(event);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Error approving event', error });
  }
};

export const rejectEvent = async (req: Request, res: Response) => {
  const { eventId } = req.params;

  try {
    const event = await prisma.events.update({
      where: { 
        id: eventId 
      },
      data: { 
        status: 'REJECTED' 
      },
    });
    console.log(event);
    return res.status(200).json({ message: 'Event rejected', event });
  } catch (error) {
    return res.status(500).json({ message: 'Error rejecting event', error });
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

export const getPendingEvents = async (req: Request, res: Response) => {

    try {
    const event = await prisma.events.findMany({
      select: {
        id: true,
        eventTitle: true,
        organizer: true,
        createdAt: true,
        status: true,
      },
    });
    console.log(event);
    res.status(200).json(event);
  } catch (error: any) {
    console.error('Error fetching event:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getAllEvents = async (req: Request, res: Response) => {
  try {
    const events = await prisma.events.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        organizer: true,
        eventCategory: true,
      },
      where: {
        status: "APPROVED",
      }
    });
    console.log(events);
    res.status(200).json(events);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};

export const getEventById = async (req: Request, res: Response) => {
  try {
    const { eventId }  = req.params;
    const event = await prisma.events.findUnique({
      where: {
        id: eventId,
        status: "APPROVED",
      },
      include: {
        organizer: true,
        eventCategory: true,
      }
    });
    console.log(event);
    res.status(200).json(event);
  } catch (error: any) {
    console.error(error);
    res.status(500).json({ message: 'Failed to fetch events' });
  }
};

export const getEventByUser = async (req: Request, res: Response) => {
  try {
    
  } catch (error: any) {
    console.log(error);
  }
};