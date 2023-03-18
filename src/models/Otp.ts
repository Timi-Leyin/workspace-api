import db from "../config/database";
import { DataTypes } from "sequelize";

const OtpModel = db.define("otp", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },

  otp: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },

  expireAt: {
    type: DataTypes.BIGINT,
    defaultValue: Number(Date.now()),
  },
});

export default OtpModel;
