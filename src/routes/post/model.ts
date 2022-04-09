import { Post } from "@prisma/client";
import { db } from "@src/services/db";

type PostData = Omit<Post, "id">;

async function getPostById(id: number) {
  return db.post.findUnique({
    where: {
      id,
    },
  });
}

async function createPost(data: PostData) {
  return db.post.create({ data });
}

const model = { getPostById, createPost };

export default model;
