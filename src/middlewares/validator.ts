import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import constants from "../constants";

const adminLoginValidator = [
  body("email", "Invalid Email").normalizeEmail().isEmail(),
  body("password", "Password is Required").isLength({min:1})
];

const validationError = (req: Request, res:Response, next:NextFunction) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    const error = errors.array()[0].msg;
    return res.status(constants.status.notAcceptable).json({msg:error})
  }
  return next()
};

export { adminLoginValidator, validationError };
