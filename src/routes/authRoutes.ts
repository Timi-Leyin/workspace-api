import express from "express";
import constants from "../constants";
import { login, verifyOtp } from "../controllers/users";
import {
  loginValidator,
  validationError,
  verifyOtpValidator,
} from "../middlewares/validator";
import verifyToken from "../middlewares/verifyToken";
import profileInfo from "../controllers/users/profileInfo";
const route = express.Router();

/*
 *  INFO ROUTE
 */
route.get(constants.routes.profile, verifyToken, profileInfo);

/*
 *  LOGIN ROUTE
 */
route.post(constants.routes.auth.login, loginValidator, validationError, login);

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
