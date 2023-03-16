import constants from "../../constants/index";
import { Request, Response } from "express";
import PostModel from "../../models/Posts";
import * as uuid from "uuid";

const createPost = async (req: any, res: Response) => {
  const {
    title,
    thumbnail,
    category,
    content,
    meta_title,
    meta_decription,
    meta_keywords,
    meta_robots,
    archived,
  } = req.body;
  const new_post = await PostModel.create({
    uuid: uuid.v1(),
    user_id: req.user.uuid,
    author: req.user.name,
    title,
    thumbnail,
    category,
    content,
    meta_title,
    meta_decription,
    meta_keywords,
    meta_robots,
    archived,
  });
  const post: any = await new_post.save();

  res.status(constants.status.created).json({
    msg: "Post Created",
    data: {
      id: post.uuid,
    },
  });
};

export default createPost;
