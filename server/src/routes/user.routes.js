import { Router } from "express";
import { submitform } from "../controllers/user.controller.js";
const router=Router();


router.route('/submitform').post(submitform)

export default router
