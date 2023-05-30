import express, { Request, Response } from "express";
import User from "../../models/User";
import constants from "../../constants";

const checkUsername = async (req: Request, res: Response) => {
  const { username } = req.params;

  const exists = await User.findOne({
    where: {
      username,
    },
  });

  res.status(constants.status.ok).json({
    exists: !!exists,
  });
};

export default checkUsername;
