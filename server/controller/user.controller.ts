// import User from '../models/user.model'
// import extend from 'lodash/extend'
// import errorHandler from './../helpers/dbErrorHandler'
import { Request,Response } from "express"

const create = async (req:Request, res:Response) => {

    res.status(200).json({message:"create"})
}

/**
 * Load user and append to req.
 */

export default {
  create,
}