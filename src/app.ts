import express, { NextFunction, Request, Response } from  "express"
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import constants from "./constants";
import checkIp from "./middlewares/checkIp";
import error from "./middlewares/error";
import adminRoute from "./routes/adminRoutes";
import postsRoutes from "./routes/postsRoutes";
import cors from "cors";

// main code logic
const app = express();

// middlewares
app.disable("x-powered-by");
// app.use(express.static(path.join(__dirname, "public")));
app.use(helmet());
app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
process.env.NODE_ENV == "development" && app.use(morgan("dev"));

// admin routes
app.use(checkIp);
app.use(adminRoute);
app.use(postsRoutes);

// error rotes
app.use(error);
export default app;