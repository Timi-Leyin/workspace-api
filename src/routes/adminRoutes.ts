import express from "express"
import constants from "../constants"
import { postLoginAdmin } from "../controllers/adminController"
import { adminLoginValidator } from "../utils/validator"
const route = express.Router()

route.post(constants.routes.admin.login,  adminLoginValidator, postLoginAdmin )


export default route