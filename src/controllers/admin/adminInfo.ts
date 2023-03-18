import { Request, Response } from "express";
import constants from "../../constants";

export default (req: any, res: Response) => {
  const { user } = req;
  res.status(constants.status.ok).json({
    msg: "Fetched Data",
    data: {
      email: user.email,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    },
  });
};
