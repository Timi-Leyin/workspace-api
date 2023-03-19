import { Request, Response } from "express";
import constants from "../../constants";
import StorageModel from "../../models/Storage";

export default async (req: Request, res: Response) => {
  const storage: any = await StorageModel.findAll();

  res.status(constants.status.ok).json({
    msg: "Fectched Files Successfully",
    data: storage.map((st: any) => st.get()),
  });
};
