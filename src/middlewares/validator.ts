import { NextFunction, Request, Response } from "express";
import { body, validationResult } from "express-validator";
import constants from "../constants";

const adminLoginValidator = [
  body("email", "Invalid Email").normalizeEmail().isEmail(),
  body("password", "Password is Required").isLength({min:1})
];

export const verifyOtpValidator = [
  body("email", "Invalid Email").normalizeEmail().isEmail(),
  body("otp", "OTP is Required")
    .isLength({ min: 4 })
    .withMessage("Invalid OTP"),
];

export const deleteFileValidator = [
  body("fileId", "Thumbnail is Required")
    .isLength({ min: 6 })
    .withMessage("Invalid FileID"),
];
const createPostValidator = [
  body("title", "Title must me more than 5 Characters").isLength({ min: 5 }),
  body("thumbnail", "Thumbnail is Required").isLength({ min: 6 }),
  body("content", "Content must be greater than 10 Characters").isLength({
    min: 10,
  }),
];

const createAdminValidator = [
  ...adminLoginValidator,
  body("name", "Name cannot be empty")
    .isLength({ min: 5 })
    .withMessage("Name Must be more than 5 charcters"),
];

const validationError = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    const error = errors.array()[0].msg;
    return res.status(constants.status.notAcceptable).json({ msg: error });
  }
  return next();
};

export {
  adminLoginValidator,
  validationError,
  createPostValidator,
  createAdminValidator,
  // updatePostValidator,
};
