import jwt from "jsonwebtoken"

interface Payload{
    _id?:string
}

const generate = async (payload:Payload)=>{
    jwt.sign(process.env.JWT_SECRET)
}



const verify = async (token:string)=>{
    
}


export {generate, verify}