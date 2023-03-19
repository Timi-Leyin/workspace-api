import { Request, Response } from "express";
import fs from "fs";
import imagekit from "../../config/imagekit";
import constants from "../../constants";
import StorageModel from "../../models/Storage";

export default async (req: Request, res: Response) => {
  const { files }: any = req;
  if (typeof files == "object" && files.length > 0) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);

    // console.log(files);
    const upload = imagekit.upload(
      {
        file: files[0].buffer,
        fileName: uniqueSuffix + files[0].originalname,
      },
      async (err, _res: any) => {
        if (err) {
          // console.log(err);
          // console.log("IMAGEKIT ERROR");
          return res.status(constants.status.serverError).json({
            msg: "Upload Failed",
          });
        }
        // console.log(_res);
        const storage = await StorageModel.create({
          _id: _res.versionInfo.id,
          fileId: _res.fileId,
          fileType: _res.fileType,
          name: _res.name,
          size: _res.size,
          url: _res.url,
        });
        storage.save();
        return res.status(constants.status.created).json({
          msg: "Uploaded Successfully",
          data: {
            url: _res.url,
            name: _res.name,
          },
        });
      }
    );

    return;
  }
  return res
    .status(constants.status.notAcceptable)
    .json({ msg: "No file to be uploaded" });
};
