import PostModel from "../../models/Posts";
import constants from "../../constants";
import { Request, Response } from "express";

const deletePost = async (req: Request, res: Response) => {
  const postID = req.params.id;
  const post = await PostModel.destroy({
    where: {
      uuid: postID,
    },
  });
  if (post) return res.status(constants.status.ok).json({ msg: "Deleted" });
return res.status(constants.status.conflict).json({ msg: "Post Not Found" });
};

export default deletePost;
