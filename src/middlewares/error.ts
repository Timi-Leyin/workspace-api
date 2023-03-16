import { Request, Response } from "express";
import constants from "../constants";

export default (req: Request, res: Response) => {
  res
    .status(constants.status.notFound)
    .json({ msg: "Oops!, METHOD NOT ALLOWED 🤒" });
};
