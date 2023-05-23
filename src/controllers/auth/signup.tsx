import { Request, Response } from "express";
import User from "../../models/User";
import constants from "../../constants";
import { encrypt } from "../../utils/password";
import {generate} from "../../utils/token"
const signup = async (req: Request, res: Response) => {
  const { email, username, password, firstName, lastName } = req.body;
  const email_exists = await User.findOne({
    where: {
      email,
    },
  });

  const username_exists = await User.findOne({
    where: {
      username,
    },
  });

  if (email_exists || username_exists) {
    return res.status(constants.status.conflict).json({
      msg: `${email_exists ? "Email" : "Username"} Already Exists`,
    });
  }

  const hash = await encrypt(password);
  const user = await User.create({
    email,
    username,
    firstName,
    lastName,
    password: hash,
  });
  await user.save();
  const token = await generate({
    _id:user.get().uuid
  });
  return res.status(constants.status.created).json({
    msg:"Account Created Successfully",
    token
  });
};

export default signup;
