import { Request, Response } from "express"
import constants from "../constants"
import PostModel from "../models/Posts"

export const getPosts = async(req:Request, res:Response)=>{
    const {query} = req  ;
    const limit = query.limit && Number(query.limit) || 10;
//  const post_id =  query.id ? await PostModel.findAll({
//     where:{uuid:query.id},
//  }) : []


//  const post_title =  query.title ? await PostModel.findAll({
//     where:{title:query.title}
//  }) : []

 const all_post =  (!query.title && !query.id) ? await PostModel.findAll({
    limit
 }) : []
 
 const posts = [...all_post]
//  console.log(limit)

return res.status(constants.status.ok).json({msg:`Found (${posts.length}) posts`, data:posts})
}

export const getPostsById = async(req:Request, res:Response)=>{
    const {params} = req 

    const post = await PostModel.findAll({
        where:{
            uuid: params.id
        }
    })
    return res.status(constants.status.ok).json({msg:`Found Post`, data: post})
}