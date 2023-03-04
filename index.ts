import dotenv from "dotenv"
import db from "./src/config/database";
dotenv.config()
import app from "./src/app";
import User from "./src/models/User";
import uuid from "uuid"
// console.log(uuid.v1())
db.sync().then(result=> console.log("Synced 😎"))
.catch(err=> console.log(err));
   
    // (async function(){
    //   const user = await  User.create({
    //         uuid:"123456",
    //         name:"Timileyin Oyelekan",
    //         email:"originalTimi@duck.com",
    //         password:"password"
    
    //      })
    //      console.log(user.save())
    // })()

const PORT = process.env.PORT || process.env.DEV_PORT ;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))