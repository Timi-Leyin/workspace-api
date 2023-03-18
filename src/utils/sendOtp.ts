import constants from "../constants";
import { Request, Response } from "express";
import { Op } from "sequelize";
import OtpModel from "../models/Otp";
import { encrypt } from "./password";
import { generate as OTPgenerator } from "otp-generator";

export default async (req: Request, res: Response) => {
  const MS_PER_MIN = 60000;
  const check_otp = await OtpModel.findOne({
    where: {
      email: req.body.email,
      createdAt: {
        [Op.gte]: new Date(Date.now() - MS_PER_MIN * 5),
      },
    },
  });

  if (check_otp) {
    return res.status(constants.status.ok).json({
      msg: "OTP Already Sent Check your Email",
    });
  }

  const otp = OTPgenerator(4, {
    specialChars: false,
    lowerCaseAlphabets: false,
    upperCaseAlphabets: false,
  });
  console.log("OTP - ", otp);
  //send to email

  //save otp to db
  const saveOtp = await OtpModel.create({
    otp: await encrypt(otp),
    email: req.body.email,
  });
  await saveOtp.save();
  return res.status(constants.status.ok).json({ msg: "OTP Sent", otp: true });
};
