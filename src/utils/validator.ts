import { Request } from "express";
import { body, validationResult } from "express-validator";

const adminLoginValidator = [
  body("email", "Invalid Email").normalizeEmail().isEmail(),
];

const validationError = (req: Request) => {
  const errors = validationResult(req);
  if (errors.array().length > 0) {
    const error = errors.array()[0].msg;
    return error;
  }
  return null;
};

export { adminLoginValidator, validationError };
