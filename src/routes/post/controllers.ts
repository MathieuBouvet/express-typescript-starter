import controller from "@src/lib/controller";

const getPost = controller(async (req, res) => {
  res.status(201);
  return "coucou";
});

const createPost = controller(async (req, res) => {
  const body = req.body;
  return body;
});

export { getPost, createPost };
