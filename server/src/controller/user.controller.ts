import { NextFunction, Request,Response } from "express"
import userSchema from "../database/schema/UserSchema"
import { createUser, IUser } from "../database/repository/user.repository"

const create = async (req:Request<{},{},IUser>, res:Response) => {
    try {
      const user  = req.body
      console.log('req.body:',user)
      await createUser(user)
      res.status(200).json({message:"user created successfully",})
    } catch (error) {
      // @ts-ignore
      res.status(500).json({message:"Something went wrong",error:error.message})
    }
}

const validateUser = (req:Request,res:Response,next:NextFunction)=>{
  const {error} = userSchema.validate(req.body)
  console.log("validation",error)
  if(error){
      console.log("error")
      return res.status(400).json({error: error})
  }
  console.log('no error')
  next()
}



export default {
  create,
  validateUser,
}