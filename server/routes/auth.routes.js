import express from "express";
import {signup,signin,logout} from "../controller/auth.controller.js";
import verifyToken from "../middleware/auth.middleware.js";

const router = express.Router();
// router.get("/signup",(req,res)=>{
//     res.send("signup route")
// })

// router.get("signin" , (req,res)=>{
//     res.send("signin route")
// })
// router.get("/logout", (req,res)=>{
// res.send("logout route")
// })
router.post("/signup",signup);
router.post("/signin",signin);
router.post("/logout",verifyToken,logout);

export default router;