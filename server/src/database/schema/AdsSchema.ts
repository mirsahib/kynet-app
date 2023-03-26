import Joi from "joi";

const AdsSchema = Joi.object({
    catagory:Joi.string().required(),
    location:Joi.string().required(),
    title:Joi.string().required(),
    description:Joi.string().required(),
    image:Joi.any(),
})

export default AdsSchema