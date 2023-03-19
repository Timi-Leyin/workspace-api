import { Router } from "express";
import constants from "../constants";
import saveStorage from "../controllers/fileManager/saveStorage";

const router = Router();
import multer from "multer";
import verifyToken from "../middlewares/verifyToken";
import verifyRootAdmin from "../middlewares/verifyRootAdmin";
import getStorage from "../controllers/fileManager/getStorage";
import deleteStorage from "../controllers/fileManager/deleteStorage";
import { deleteFileValidator, validationError } from "../middlewares/validator";
const storage = multer.memoryStorage();

const upload = multer({ storage: storage });

router.post(
  constants.routes.file.saveFile,
  verifyToken,
  verifyRootAdmin,
  upload.array("upload_file"),
  saveStorage
);

router.get(
  constants.routes.file.getFile,
  verifyToken,
  verifyRootAdmin,
  getStorage
);

router.delete(
  constants.routes.file.getFile,
  verifyToken,
  verifyRootAdmin,
  deleteFileValidator,
  validationError,
  deleteStorage
);
export default router;
