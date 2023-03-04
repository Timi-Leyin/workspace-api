import {Sequelize} from "sequelize";

const db = new Sequelize("web-app","root", "password",{
    dialect:"mysql",
    host:"localhost"
})

export default db