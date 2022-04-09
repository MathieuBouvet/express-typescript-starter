import { Router } from "express";
import { getPost, createPost } from "@routes/post/controllers";

const postRouter = Router();

postRouter.get("/:id", getPost);
postRouter.post("/", createPost);

export default postRouter;
