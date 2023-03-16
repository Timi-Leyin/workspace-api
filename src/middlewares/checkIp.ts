import { Response, Request, NextFunction } from "express";

export default (req: Request, res: Response, next: NextFunction) => {
  console.log("IP ADDRESS: ", req.ip);
  return next();
};
