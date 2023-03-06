import { Request, Response } from "express"
import constants from "../constants"
import User, { ROLE } from "../models/User"
import UserModel from "../models/User"
import { decrypt, encrypt } from "../utils/password"
import { generate } from "../utils/token"

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
  const user_data = user.get()
  const checkPassword =  await decrypt(req.body.password, user_data.password)
   if(!checkPassword)  return res.status(constants.status.notAcceptable).json({msg:"Authentication Failed"})
  // generate token
  const token = await generate({
    _id: user_data.uuid,
  })
  return res.status(constants.status.ok).json({msg:"Admin Login successful", token})
  }
  // return error if not match
 return res.status(constants.status.notFound).json({msg:"Credentials not Found"})
}