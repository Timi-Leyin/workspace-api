import express, { NextFunction, Request, Response } from  "express"
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import constants from "./constants";
import checkIp from "./middlewares/checkIp";
import error from "./middlewares/error";
import adminRoute from "./routes/adminRoutes";
import postsRoutes from "./routes/postsRoutes";
import fileMangerRoute from "./routes/fileMangerRoute";
import cors from "cors";

// main code logic
const app = express();

// middlewares
app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(
  express.urlencoded({
    extended: true,
    limit: constants.config.limit,
    parameterLimit: constants.config.parameterLimit,
  })
);
app.use(express.json({ limit: constants.config.limit }));
process.env.NODE_ENV == "development" && app.use(morgan("dev"));

// admin routes
app.use(checkIp);
app.use(adminRoute);
app.use(postsRoutes);
app.use(fileMangerRoute);

// error rotes
app.use(error);
export default app;