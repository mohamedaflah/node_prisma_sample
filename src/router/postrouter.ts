import { Router } from "express";
import { createPost } from "../controllers/createPost";

export const postRouter = Router();
postRouter.route('/').post(createPost)
