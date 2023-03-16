import { DataTypes } from "sequelize";
import db from "../config/database";
import * as uuid from "uuid";
const PostModel = db.define("posts", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    unique: true,
    autoIncrement: true,
  },
  user_id: {
    type: DataTypes.STRING,
  },
  author: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
    defaultValue: "",
  },
  content: {
    type: DataTypes.TEXT("long"),
    allowNull: false,
  },
  thumbnail: {
    type: DataTypes.TEXT("long"),
  },
  views: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  meta_title: {
    type: DataTypes.STRING,
  },
  meta_description: {
    type: DataTypes.STRING,
  },
  meta_keywords: {
    type: DataTypes.STRING,
  },
  meta_robots: {
    type: DataTypes.BOOLEAN,
  },
  uuid: {
    type: DataTypes.STRING,
    defaultValue: uuid.v1(),
    allowNull: false,
  },
  archived: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});


export default PostModel