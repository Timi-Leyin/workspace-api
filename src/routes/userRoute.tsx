import express from "express";
import constants from "../constants";
import profileInfo from "../controllers/users/profileInfo";
import verifyToken from "../middlewares/verifyToken";
const route = express.Router();

route.get(constants.routes.profile, profileInfo);


export default route;
