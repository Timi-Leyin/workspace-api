import {DataTypes} from "sequelize";
import sequelize from "../config/database";
import * as uuid from "uuid"
export enum ROLE{admin, moderator, user}
const User = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  uuid: {
    type: DataTypes.STRING,
    defaultValue:uuid.v1(),
    allowNull: false,
  },
  user_id: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  root: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  role: {
    type: DataTypes.INTEGER,
    defaultValue: ROLE.user,
  },
  _auth: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  restricted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  verified: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default User