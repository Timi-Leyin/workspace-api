import PostModel from "../../models/Posts";
import constants from "../../constants";
import { Request, Response } from "express";
const getPostById = async (req: Request, res: Response) => {
  const { params } = req;

  const post = await PostModel.findOne({
    where: {
      uuid: params.id,
    },
  });
  return res
    .status(constants.status.ok)
    .json({ msg: `Found Post`, data: post });
};

export default getPostById;
