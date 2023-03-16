import constants from "../../constants";
import { ROLE } from "../../models/User";
import { decrypt } from "../../utils/password";
import { generate } from "../../utils/token";
import { Request, Response } from "express";
import UserModel from "../../models/User";

const loginAdmin = async (req: Request, res: Response) => {
  // check if email and isADmin
  const user = await UserModel.findOne({
    where: {
      email: req.body.email,
      role: ROLE.admin,
    },
  });
  if (user) {
    const user_data = user.get();
    const checkPassword = await decrypt(req.body.password, user_data.password);
    if (!checkPassword)
      return res
        .status(constants.status.notAcceptable)
        .json({ msg: "Authentication Failed" });

    // PASSWORD IS CORRECT
    if (user_data._auth) {
      // send otp
      return;
    }
    // generate token
    const token = await generate({
      _id: user_data.uuid,
    });
    return res
      .status(constants.status.ok)
      .json({ msg: "Admin Login successful", token });
  }
  // return error if not match
  return res
    .status(constants.status.notFound)
    .json({ msg: "Credentials not Found" });
};

export default loginAdmin;
