import express from "express";
import dotenv from "dotenv";
import "module-alias/register";

import controller from "@lib/controller";

import HttpError from "@lib/HttpError";
import errorHandler from "@middlewares/errorHandler";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 4000;

app.get("/", (req, res) => {
  res.json("Hello express with typescript world");
});

app.get(
  "/error/:code?",
  controller(async (req, res) => {
    const code = Number(req.params.code ?? 500);

    if (code >= 400) {
      throw new HttpError(code);
    }
    res.json(code);
  })
);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
