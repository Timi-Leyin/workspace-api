import { Request, Response } from "express"
import constants from "../constants"
import User, { ROLE } from "../models/User"
import UserModel from "../models/User"

/**
 * @todo: Wrap in Try Catch
 *        Check Password
 *        Encrypt & Decrypt Password
 **/

export const postLoginAdmin = async(req:Request, res:Response)=>{
  // check if email and isADmin
 const user =  await UserModel.findOne({where:{
  email:req.body.email,
  role:ROLE.admin 
 }})
 if(user){
  // check password
    console.log(user)
   return res.status(constants.status.ok).json({msg:""})
  }
  // return error if not match
 return res.status(constants.status.notFound).json({msg:"Credentials not Found"})
}