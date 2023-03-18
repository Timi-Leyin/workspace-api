import { Request, Response } from "express";
import { decrypt } from "../../utils/password";
import constants from "../../constants";
import OtpModel from "../../models/Otp";
import UserModel from "../../models/User";
import { generate } from "../../utils/token";
import { Op } from "sequelize";
import sendOtp from "../../utils/sendOtp";

export default async (req: Request, res: Response) => {
  const { resend } = req.query;
  const { otp, email } = req.body;
  const MS_PER_MIN = 60000;

  await OtpModel.destroy({
    where: {
      email,
      createdAt: {
        [Op.lte]: new Date(Date.now() - MS_PER_MIN * 5),
      },
    },
  });
  if (resend) {
    await OtpModel.destroy({
      where: {
        email,
      },
    });
    return sendOtp(req, res);
  }
  const otpValue = await OtpModel.findOne({
    where: {
      email,
    },
  });

  const OTP = await decrypt(otp, otpValue?.get().otp ?? "");
  console.log(OTP);
  // console.log(otpValue?.get());
  // console.log((Date.now() - 1679088000249) / MS_PER_MIN);
  // console.log(Date.now() - Number(otpValue?.get().expireAt) / MS_PER_MIN);
  if (OTP) {
    const user = await UserModel.findOne({
      where: {
        email: email,
      },
    });
    await OtpModel.destroy({
      where: {
        email,
      },
    });
    return res.status(constants.status.ok).json({
      msg: "OTP Verified",
      token: await generate({ _id: user?.get().uuid }),
    });
  }
  // console.log("here");
  return res.status(constants.status.notAcceptable).json({
    msg: "Invalid OTP",
  });
};
