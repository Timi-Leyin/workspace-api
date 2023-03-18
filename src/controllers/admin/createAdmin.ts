import { Request, Response } from "express";
import constants from "../..//constants";
import UserModel from "../../models/User";
import * as uuid from "uuid";
import { encrypt } from "../../utils/password";

export default async (req: any, res: Response) => {
  const { email, password, name, role } = req.body;
  const user_ex = await UserModel.findOne({
    where: {
      email,
    },
  });

  if (user_ex) {
    return res.status(constants.status.conflict).json({
      msg: "Account with Email Already Exists",
    });
  }
  const user = await UserModel.create({
    uuid: uuid.v1(),
    email,
    password: await encrypt(password),
    name,
    role,
    // _auth: true,
    user_id: req.user.uuid,
  });
  const saved_user = await user.save();
  res.status(constants.status.created).json({
    msg: "Account Created",
  });
};
