import express from "express";
import { sendMail } from "../controllers/sendmail.js";

const router = express.Router();

router.route("/").post(sendMail);

export default router;
