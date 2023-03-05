import { DataTypes } from "sequelize";
import db from "../config/database";


const PostModel = db.define("posts",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        unique:true,
        autoIncrement:true
    },
    user_id:{
        type:DataTypes.STRING,
    },
    title:{
        type:DataTypes.STRING,
        allowNull:false
    },
    category:{
        type:DataTypes.STRING,
        defaultValue:"",
    },
    content:{
        type:DataTypes.TEXT,
        allowNull:false
    },
    thumbnail:{
        type:DataTypes.STRING,
    },
    meta_title:{
        type:DataTypes.STRING,
    },
    meta_description:{
        type:DataTypes.STRING,
    },
    meta_keywords:{
        type:DataTypes.STRING,
    },
    meta_robots:{
        type:DataTypes.BOOLEAN,
    },
    uuid:{
        type:DataTypes.STRING,
        allowNull:false
    },
    archived:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})