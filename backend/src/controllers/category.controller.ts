import prisma from "../configs/prisma.config";
import { Request, Response } from "express";
import { createCategoryParams } from "../interfaces";

export const createCategory = async (req: Request, res: Response) => {
  try {   
    const { categoryName } = req.body;

    const createCategory = await prisma.category.create({
      data: {
        categoryName: categoryName,
      },
    });
    res.status(200).json(createCategory);
  } catch (error: any) {
    console.error(error);
    res.status(500).json(error);
  }
};

export const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories = await prisma.category.findMany({
      include: {
        events: true,
      }
    });
    console.log(categories);
    res.status(200).json(categories)
  } catch (error: any) {
    console.log(error);
    res.status(500).json(error);
  }
};