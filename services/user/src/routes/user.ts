import express from "express"
import { isAuth } from "../middleware/auth.js";
import { getUserProfile, myProfile, updateProfilePic, updateUserProfile } from "../controllers/user.js";
import uploadFile from "../middleware/multer.js";
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });


const router = express.Router();
router.get("/me" , isAuth , myProfile)
router.get("/:userId" , isAuth , getUserProfile)
router.put("/update/profile" , isAuth , updateUserProfile);
router.put("/update/pic" , isAuth , upload.single('file') , updateProfilePic);

export default router;