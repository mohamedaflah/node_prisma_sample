import { NextFunction, Request, Response } from "express";
import { prisma } from "../config/prisma";

export const updatePost = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { data } = req.body;
    const { id } = req.query;
    const updateBlog = await prisma.post.update({
      where: { id: Number(id) },
      data: data,
    });

    res.status(200).json({status:true,message:"Successful",updateBlog})
  } catch (error) {
    next(error);
  }
};
