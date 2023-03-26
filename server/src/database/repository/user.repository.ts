import client from '../database'
import bcrypt from 'bcrypt'

export interface IUser {
    firstName?:string,
    lastName?:string,
    email:string,
    password:string,
    updated?:Date
    created?:Date
}

const createUser = async (userData:IUser) =>{
    userData.password = await hashedPassword(userData.password)
    return await client?.db('kynet').collection('user').insertOne(userData)
}

const findUser = async (userData:IUser) =>{
    return await client?.db('kynet').collection('user').findOne({email:userData.email})
}

const hashedPassword = async (password:string)=>{
    const saltRound = 10
    return await bcrypt.hash(password,saltRound)
}

const verifyPassword = async (password:string,hashedPassword:string)=>{
    return await bcrypt.compare(password,hashedPassword)
}

export {
    createUser,
    findUser,
    verifyPassword
}