import { NextFunction, Request, Response } from "express";
import { findUser, IUser,verifyPassword } from "../database/repository/user.repository";
import authSchema from "../database/schema/AuthSchema";
import jwt from "jsonwebtoken"

const login = async (req: Request<{}, {}, IUser>, res: Response) => {
	try {
		const user = await findUser(req.body);
		if (!user) {
			return res.status(401).json({
				error: "User not found",
			});
		}
		const isMatch = await verifyPassword(req.body.password,user.password)
		if(!isMatch){
			return res.status(401).json({
				error: "Email and password don't match.",
			});
		}
		const token = jwt.sign({_id:user._id},"<NyC*U7{e#W=lfp")
		const expiryDate = new Date(Number(new Date()) + 172800000);
		res.cookie("token", token, {
		  expires: expiryDate,
		  httpOnly: true,
		});
	
		return res.json({
			token,
			user:{
				_id:user._id,
			}
		})
	} catch (error) {
		//@ts-ignore
		res.status(500).json({message:"Something went wrong",error:error.message})
	}
};

const validateAuth = (req: Request, res: Response, next: NextFunction) => {
	const { error } = authSchema.validate(req.body);
	console.log("validation", error);
	if (error) {
		console.log("error");
		return res.status(400).json({ error: error });
	}
	console.log("no error");
	next();
};

export default {
	login,
	validateAuth,
};
