import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";

export const getAllPosts = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const posts = await prisma.post.findMany();
    return res.status(200).json({ status: true, message: "Succesfull", posts });
  } catch (error) {
    next(error);
  }
};
