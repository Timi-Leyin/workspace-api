import Sequelize from "sequelize";
import sequelize from "../config/database";

enum ROLE{admin, moderator, user}
const User = sequelize.define("users",{
    id:{
        type:Sequelize.INTEGER,
        allowNull:false,
        primaryKey:true,
        unique:true,
        autoIncrement:true
    },
    uuid:{
        type:Sequelize.STRING,
        allowNull:false
    },
    name:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    root:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    }, 
    role:{
        type:Sequelize.INTEGER,
        defaultValue:ROLE.user
    },
    restricted:{
        type:Sequelize.BOOLEAN,
        defaultValue:false
    },
    created_at:{
        type:Sequelize.DATE,
        defaultValue: new Date()
    },
    updated_at:{
        type:Sequelize.DATE,
        defaultValue: new Date()
    }
})

export default User