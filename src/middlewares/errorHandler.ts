import { Request, Response, NextFunction } from "express";

import HttpError from "@lib/HttpError";

function errorHandler(
  err: Error | HttpError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof HttpError) {
    res.status(err.code);
    res.json({ ...err, message: err.message });
  } else {
    next(err);
  }
}

export default errorHandler;
