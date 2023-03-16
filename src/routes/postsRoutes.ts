import express from "express"
import constants from "../constants"
import { getPosts, getPostById } from "../controllers/users";
const route = express.Router()

route.get(constants.routes.getPosts, getPosts )
route.get(constants.routes.getPostById, getPostById);


export default route