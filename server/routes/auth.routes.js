import express from "express";
import {signup,signin,logout} from "../controller/auth.controller.js";
import verifyToken from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/signup",signup);
router.post("/signin",signin);
router.post("/logout",verifyToken,logout);

export default router;