import * as bcrypt from "bcrypt"


const encrypt = async(password:string)=>{
    const salt = bcrypt.genSalt(11)
   return await bcrypt.hash(password, await salt)
}


const decrypt = async(password:string, hash:string)=>{
  return await bcrypt.compare(password, hash)
}


export {encrypt, decrypt}