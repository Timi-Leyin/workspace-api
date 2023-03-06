import express from "express"
import constants from "../constants"
import { getPosts, getPostsById } from "../controllers/postsController"
const route = express.Router()

route.get(constants.routes.getPosts, getPosts )
route.get(constants.routes.getPostById, getPostsById )


export default route