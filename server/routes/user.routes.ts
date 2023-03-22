import express from "express";
import userCtrl from "../controller/user.controller"

const router = express.Router();

router.route("/api/users").get().post(userCtrl.create);

router.route("/api/users/:userId")
	.get()
	.put()
	.delete();

// router.param();

export default router