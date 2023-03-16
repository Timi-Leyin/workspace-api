import { NextFunction, Request, Response } from "express";
import constants from "../constants";
import { ROLE } from "..//models/User";
export default (req: any, res: Response, next: NextFunction) => {
  //   const isRoot = req.user.root;
  const role = ROLE[req.user.role];
  // console.log(role);

  if (role === "admin") {
    return next();
  }
  return res
    .status(constants.status.unauthorized)
    .json({ msg: "Unauthorized as Admin" });
};
