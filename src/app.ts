import express, { NextFunction, Request, Response } from "express";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import constants from "./constants";
import checkIp from "./middlewares/checkIp";
import error from "./middlewares/error";
import authRoute from "./routes/authRoutes";
import cors from "cors";
import userRoute from "./routes/userRoute";
import verifyToken from "./middlewares/verifyToken";

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
app.use("/auth",authRoute);
app.use(verifyToken,userRoute);

// error rotes
app.use(error);
export default app;
