import express from "express";
import constants from "../constants";
import { login, verifyOtp } from "../controllers/users";
import {
  loginValidator,
  signupValidator,
  validationError,
  verifyOtpValidator,
} from "../middlewares/validator";
import signup from "../controllers/auth/signup";
import checkEmail from "../controllers/auth/checkEmail";
import checkUsername from "../controllers/auth/checkUsername";
const route = express.Router();

/*
 *  SIGNUP ROUTE
 */
route.post(constants.routes.auth.signup, signupValidator, validationError, signup);


/*
 *  LOGIN ROUTE
 */
route.post(constants.routes.auth.login, loginValidator, validationError, login);


/*
 *  CHECK EMAIL ROUTE
 */
route.get(constants.routes.auth.checkEmail, checkEmail);

/*
 *  CHECK USERNAME ROUTE
 */
route.get(constants.routes.auth.checkUsername, checkUsername);


/*
 *  VERIFY OTP ROUTE
 */
route.post(
  constants.routes.auth.verifyOtp,
  verifyOtpValidator,
  validationError,
  verifyOtp
);

export default route;
