import { NextFunction, Request, Response } from "express";

export const errorHandler = (
  err: Error | any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(500).json({ status: false, message: err.message });
};
