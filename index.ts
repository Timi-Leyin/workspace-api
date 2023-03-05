import dotenv from "dotenv"
import db from "./src/config/database";
dotenv.config()
import app from "./src/app";
import User, { ROLE } from "./src/models/User";
import * as uuid from "uuid"
console.log()
db.sync().then(result=> console.log("Synced 😎"))
.catch(err=> console.log(err));
   
    // (async function(){
    //   const user = await  User.create({
    //         uuid:uuid.v1(),
    //         name:"Timileyin Oyelekan",
    //         email:"originalTimi@duck.com",
    //         password:"password",
    //         role:ROLE.admin
    //      })
    //      console.log(user.save())
    // })()

const PORT = process.env.PORT || process.env.DEV_PORT ;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))