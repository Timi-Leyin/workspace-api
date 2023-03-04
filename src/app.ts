import express, { NextFunction, Request, Response } from  "express"
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import adminRoute from "./routes/adminRoutes"
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
app.use(morgan("dev"))

// admin routes
app.use(adminRoute)
  
// error rotes
app.use((req:Request, res:Response)=>{
  res.status(404).json({msg:"Oops!, Route not Found 🤒"})
})
export default app;