import {DataTypes} from "sequelize";
import sequelize from "../config/database";

export enum ROLE{admin, moderator, user}
const User = sequelize.define("users",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        unique:true,
        autoIncrement:true
    },
    uuid:{
        type:DataTypes.STRING,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    root:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }, 
    role:{
        type:DataTypes.INTEGER,
        defaultValue:ROLE.user
    },
    restricted:{
        type:DataTypes.BOOLEAN,
        defaultValue:false
    }
})

export default User