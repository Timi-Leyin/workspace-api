import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import constants from "../constants";
import User from "../models/User";
import { verify } from "../utils/token";

export default async(req:any, res:Response, next:NextFunction)=>{
    const headers = req.headers
    const bearer = headers.authorization
    const token = bearer && bearer.split(" ").length>1 ? bearer.split(" ")[1] :null

    if(!token) return res.status(constants.status.unauthorized).json({
        msg:"Not Authorized"
    })
    

  try{
    const checkToken  = await verify(token) as jwt.JwtPayload;
    const admin = await User.findOne({where:{
        uuid: checkToken._id
    }})
   if(!admin) return res.status(constants.status.notAcceptable).json({
    msg:"Invalid Authentication"
   })

    req.user = admin.get()
    return next()
  }catch(err:any){
    /*
    err:{
        name,message,expiredAt
    }
    */
  const msg = err.message;
  return res.status(constants.status.unauthorized).json({
    msg
  })
  }
}