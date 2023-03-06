import dotenv from "dotenv"
import db from "./src/config/database";
dotenv.config()
import app from "./src/app";
import User, { ROLE } from "./src/models/User";
import * as uuid from "uuid"
import PostModel from "./src/models/Posts";
console.log()
db.sync().then(result=> console.log("Synced 😎"))
.catch(err=> console.log(err));
   
    // (async function(){
    //   const user = await  User.create({
    //         uuid:uuid.v1(),
    //         name:"Timileyin Oyelekan",
    //         email:"originalTimi@duck.com",
    //         password:"$2b$11$0nSRNBV5Zr9kYJ10B1sRWeUKCshZ3Kt3OxbThqtnl5UN45Woj0TL6",
    //         role:ROLE.admin
    //      })
    //      console.log(user.save())
    // })()

    //  (async function(){
    //   const user = await  PostModel.create({
    //         uuid:uuid.v1(),
    //         user_id:"c3883770-bb52-11ed-8368-b9f0e137e049",
    //         title:"First Post",
    //         content:`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ornare eros at risus tincidunt consectetur. Curabitur turpis ligula, bibendum et malesuada id, blandit in libero. Ut dignissim urna eu massa consectetur feugiat.`,
    //         thumbnail:"",
    //         category:"newbie, first",

    //     })
    //      console.log(user.save())
    // })()

const PORT = process.env.PORT || process.env.DEV_PORT ;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`))