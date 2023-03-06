import express, { NextFunction, Request, Response } from  "express"
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import constants from "./constants";
import adminRoute from "./routes/adminRoutes"
import postsRoutes from "./routes/postsRoutes"
// import cors from "cors";

// main code logic
const app  = express()

// middlewares
app.disable("x-powered-by")
app.use(express.static(path.join(__dirname, "public")))
app.use(helmet())
// app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json());
process.env.NODE_ENV == "development" && app.use(morgan("dev"))

// admin routes
app.use(adminRoute)
app.use(postsRoutes)
  
// error rotes
app.use((req:Request, res:Response)=>{
  res.status(constants.status.notFound).json({msg:"Oops!, Route not Found 🤒"})
})
export default app;