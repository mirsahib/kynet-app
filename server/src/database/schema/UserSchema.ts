import Joi from "joi"

const userSchema = Joi.object({
    firstName:Joi.string().required(),
    lastName:Joi.string().required(),
    email:Joi.string().email().required(),
    password:Joi.string().required()
}).meta({className:'IUser'})



export default userSchema