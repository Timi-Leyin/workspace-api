import { Request, Response } from "express";
import imagekit from "../../config/imagekit";
import constants from "../../constants";
import StorageModel from "../../models/Storage";

export default async (req: Request, res: Response) => {
  const { fileId } = req.body;
  const storage: any = await StorageModel.destroy({
    where: {
      fileId,
    },
  });

  //   imagekit.deleteFile(fileId, function (error, result) {
  //     if (error) console.log(error);
  //     else console.log(result);
  //   });

  console.log(storage);
};
