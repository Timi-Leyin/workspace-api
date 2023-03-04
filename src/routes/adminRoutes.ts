import express from "express"
import constants from "../constants"
import { postLoginAdmin } from "../controllers/adminController"
import { adminLoginValidator, validationError } from "../middlewares/validator"
const route = express.Router()

route.post(constants.routes.admin.login,  adminLoginValidator, validationError, postLoginAdmin )


export default route