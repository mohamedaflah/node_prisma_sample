import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";

export const deletePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.query;
    if (!id) throw new Error(`Please provide id`);
    const deletedPost = await prisma.post.delete({
      where: { id: Number(id) },
    });
    return res
      .status(200)
      .json({ status: true, message: "Successful", deletePost });
  } catch (error) {
    next(error);
  }
};
