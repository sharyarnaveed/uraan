import { Router } from "express";
import { projectlist, submitform } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router=Router();


router.route('/submitform').post(upload.single('image1'),submitform)
router.route('/getprojects').post(projectlist)




export default router
