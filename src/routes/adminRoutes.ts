import express from "express"
import verifyRootAdmin from "../middlewares/verifyRootAdmin";
import constants from "../constants";
import {
  createAdmin,
  createPost,
  deletePost,
  login,
  updatePost,
} from "../controllers/admin";
import {
  adminLoginValidator,
  createAdminValidator,
  createPostValidator,
  // updatePostValidator,
  validationError,
} from "../middlewares/validator";
import verifyToken from "../middlewares/verifyToken";
const route = express.Router();

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