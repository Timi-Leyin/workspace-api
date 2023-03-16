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
  type: {
    type: DataTypes.STRING,
  },
  isImage: {
    type: DataTypes.BOOLEAN,
  },
  thumb: {
    type: DataTypes.STRING,
  },
  changed: {
    type: DataTypes.DATE,
    defaultValue: new Date(),
  },
  size: {
    type: DataTypes.STRING,
  },
  file: {
    type: DataTypes.STRING,
  },
  archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

export default StorageModel;
