import { Request, Response } from "express"
import { validationError } from "../utils/validator"
export const postLoginAdmin = (req:Request, res:Response)=>{
  const _err = validationError(req) 
  console.log(_err)
    // check if email && password match 
    

    // return error if not match
}