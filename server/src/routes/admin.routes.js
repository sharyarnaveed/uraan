import { Router } from "express";
import { adminsignin } from "../controllers/admin.controller.js";
import { approveprojects, GetProjects } from "../controllers/project.controller.js";
import { verifyjwt } from "../middleware/auth.middleware.js";
import { projectdetails } from "../controllers/projectdeatils.controller.js";
const router=Router();

router.route("/login").post(adminsignin)
router.route("/getprjects").post(verifyjwt,GetProjects)
router.route("/projectdetails").post(verifyjwt,projectdetails)
router.route("/approveproject").post(verifyjwt,approveprojects)



export default router
