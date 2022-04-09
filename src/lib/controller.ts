import { Request, Response, NextFunction } from "express";

type ExpressMiddlewareFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => void;

function controller(fn: ExpressMiddlewareFn): ExpressMiddlewareFn {
  return async (req, res, next) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
}

export default controller;
