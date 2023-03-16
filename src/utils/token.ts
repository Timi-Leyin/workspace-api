import jwt from "jsonwebtoken"

interface Payload{
    _id?:string
}

const generate = async (payload:Payload)=>{
    return jwt.sign(payload, process.env.JWT_SECRET as string, {
      expiresIn: "1h",
    });
}



const verify = async (token:string)=>{
    return jwt.verify(token, process.env.JWT_SECRET as string);
}


export {generate, verify}