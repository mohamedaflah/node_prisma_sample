import { Router } from "express";
import { createPost } from "../controllers/createPost";
import { getAllPosts } from "../controllers/getAllPosts";
import { getPostById } from "../controllers/getPostById";
import { updatePost } from "../controllers/updatePost";
import { deletePost } from "../controllers/deletePost";

export const postRouter = Router();
postRouter
  .route("/")
  .post(createPost)
  .get(getAllPosts)
  .patch(updatePost)
  .delete(deletePost);
postRouter.get("/:id", getPostById);
