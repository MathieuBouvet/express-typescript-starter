import { Request, Response, NextFunction } from "express";

type ExpressFn = (req: Request, res: Response, next: NextFunction) => void;

export type ControllerFn = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<any> | any;

function controller(fn: ControllerFn): ExpressFn {
  return async (req, res, next) => {
    try {
      const response = await fn(req, res, next);
      res.json(response);
    } catch (err) {
      next(err);
    }
  };
}

export default controller;
