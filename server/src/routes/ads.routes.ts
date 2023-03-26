import express from "express";
import adsCtrl from "../controller/ads.controller";
import multer from "multer";
import validation from "../util/validation";
import AdsSchema from "../database/schema/AdsSchema";
const upload = multer();
const router = express.Router();

router
	.route("/api/ads")
	.get(adsCtrl.list)
	.post(
		upload.single("image"),
		validation(AdsSchema),
		adsCtrl.uploadImage,
		adsCtrl.create
	);
router.route("/api/ads/:adsId").get(adsCtrl.read);
//@ts-ignore
router.param("adsId", adsCtrl.findAdsbyId);

export default router;
