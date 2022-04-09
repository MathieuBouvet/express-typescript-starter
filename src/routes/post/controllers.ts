import controller from "@src/lib/controller";
import HttpError from "@src/lib/HttpError";

import model from "./model";

const getPost = controller(async (req, res) => {
  const postId = Number(req.params.id);
  if (isNaN(postId)) {
    throw new HttpError(400, "Invalid post id");
  }
  const post = await model.getPostById(postId);
  if (post == null) {
    throw new HttpError(404, "Post not Found");
  }
  return post;
});

const createPost = controller(async (req, res) => {
  const { title, content } = req.body;
  if (typeof title !== "string" || typeof content !== "string") {
    throw new HttpError(400, "Invalid post data");
  }
  res.status(201);
  return model.createPost({ title, content });
});

export { getPost, createPost };
