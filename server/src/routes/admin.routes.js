import { Router } from "express";
import { adminsignin } from "../controllers/admin.controller.js";
const router=Router();

router.route("/login").post(adminsignin)




export default router
