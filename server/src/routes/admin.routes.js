import { Router } from "express";
import { adminsignin } from "../controllers/admin.controller.js";
import { GetProjects } from "../controllers/project.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";
const router=Router();

router.route("/login").post(adminsignin)
router.route("/getprjects").post(verifyjwt,GetProjects)



export default router
