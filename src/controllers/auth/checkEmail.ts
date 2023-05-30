import express, { Request, Response } from "express";
import User from "../../models/User";
import constants from "../../constants";

const checkEmail = async (req: Request, res: Response) => {
  const { email } = req.params;
    
  const exists = await User.findOne({
    where: {
      email,
    },
  });

  res.status(constants.status.continue).json({
    exists: !!exists,
  });
};

export default checkEmail;
