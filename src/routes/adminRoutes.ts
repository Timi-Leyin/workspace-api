import express from "express"
import verifyRootAdmin from "../middlewares/verifyRootAdmin";
import constants from "../constants";
import {
  createAdmin,
  createPost,
  deletePost,
  login,
  updatePost,
  verifyOtp,
} from "../controllers/admin";
import {
  adminLoginValidator,
  createAdminValidator,
  createPostValidator,
  // updatePostValidator,
  validationError,
  verifyOtpValidator,
} from "../middlewares/validator";
import verifyToken from "../middlewares/verifyToken";
import adminInfo from "..//controllers/admin/adminInfo";
const route = express.Router();

/*
 * ADMIN INFO ROUTE
 */
route.get(constants.routes.admin.adminInfo, verifyToken, adminInfo);

/*
 * ADMIN LOGIN ROUTE
 */
route.post(
  constants.routes.admin.login,
  adminLoginValidator,
  validationError,
  login
);

/*
 * ADMIN VERIFY OTP ROUTE
 */
route.post(
  constants.routes.admin.verifyOtp,
  verifyOtpValidator,
  validationError,
  verifyOtp
);



/*
 * ADMIN CREATE POST ROUTE
 */
route.post(
  constants.routes.admin.createPost,
  verifyToken,
  createPostValidator,
  validationError,
  createPost
);

/*
 * ADMIN DELETE POST ROUTE
 */
route.delete(constants.routes.admin.getPostById, verifyToken, deletePost);

/*
 * ADMIN UPDATE POST ROUTE
 */
route.put(
  constants.routes.admin.getPostById,
  verifyToken,
  // updatePostValidator,
  updatePost
);

/*
 * ADMIN create admin ROUTE
 */

route.post(
  constants.routes.admin.createAdmin,
  verifyToken,
  verifyRootAdmin,
  createAdminValidator,
  validationError,

  createAdmin
);

export default route