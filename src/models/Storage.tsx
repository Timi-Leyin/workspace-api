import { DataTypes } from "sequelize";
import db from "../config/database";
import * as uuid from "uuid";
const StorageModel = db.define("storage", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  _id: {
    type: DataTypes.STRING,
  },
  fileType: {
    type: DataTypes.STRING,
  },
  fileId: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  folder: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  size: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AiTags: {
    type: DataTypes.STRING,
  },
  favourite: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default StorageModel;
