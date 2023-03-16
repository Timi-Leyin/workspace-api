import { Request, Response } from "express";
import constants from "../../constants";
import PostModel from "../../models/Posts";
const updatePost = async (req: Request, res: Response) => {
  const postId = req.params.id;
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

  console.log(postId);

  const postInfo = await PostModel.update(
    {
      title,
      thumbnail,
      category,
      content,
      meta_title,
      meta_decription,
      meta_keywords,
      meta_robots,
      archived,
    },
    {
      where: {
        uuid: postId,
      },
    }
  );

  if (postInfo[0]) {
    return res.status(constants.status.ok).json({
      msg: "Post Updated 👍",
    });
  }
  return res.status(constants.status.notAcceptable).send({
    msg: "Could not Update Post",
  });
};

export default updatePost;
