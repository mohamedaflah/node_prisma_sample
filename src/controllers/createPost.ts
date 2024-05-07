import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";

export const createPost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      throw new Error("Please provide title and content");
    }

    const blog = await prisma.post.create({
      data: { title, content },
    });
    return res
      .status(200)
      .json({ message: "Succesfull", data: blog, status: true });
  } catch (error) {
    next(error);
  }
};
