import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";

export const getPostById = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const post = await prisma.post.findFirst({
      where: { id: Number(id) },
    });
    res.status(200).json({ status: true, message: "Successful!", post });
  } catch (error) {
    next(error);
  }
};
