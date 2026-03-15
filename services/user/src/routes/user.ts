import express from "express"
import { isAuth } from "../middleware/auth.js";
import { addSkillToUser, applyForJob, deleteSkillFromUser, getAllaplications, getUserProfile, myProfile, updateProfilePic, updateResume, updateUserProfile } from "../controllers/user.js";
import uploadFile from "../middleware/multer.js";
import multer from "multer";
const upload = multer({ storage: multer.memoryStorage() });


const router = express.Router();
router.get("/me" , isAuth , myProfile)
router.get("/:userId" , isAuth , getUserProfile)
router.put("/update/profile" , isAuth , updateUserProfile);
router.put("/update/pic" , isAuth , upload.single('file') , updateProfilePic);
router.put("/update/resume" , isAuth , upload.single('file') , updateResume);
router.post("/skill/add" , isAuth , addSkillToUser);
router.delete("/skill/delete" , isAuth , deleteSkillFromUser)
router.post("/apply/job" , isAuth , applyForJob)
router.get("/application/all" , isAuth , getAllaplications)

export default router;