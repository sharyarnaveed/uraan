import { Router } from "express";
import { submitform } from "../controllers/user.controller.js";
import { upload } from "../middleware/multer.middleware.js";
const router=Router();


router.route('/submitform').post(upload.single('image1'),submitform)





export default router
