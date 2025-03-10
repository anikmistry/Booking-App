import express from "express"
import  {updateUser, deleteUser, getUser, getAllUser } from "../controllers/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

// router.get("/checkauthentication",verifyToken, (req,res,next)=>{
//     res.send("hellow user you are logged in")
// })

// router.get("/checkUser/:id", verifyUser, (req,res,next)=>{
//     res.send("you are logged in and you can delete user")
// })
// router.get("/checkAdmin/:id", verifyAdmin, (req,res,next)=>{
//     res.send("you are Admin and you can delete user")
// })

router.put("/:id",verifyUser, updateUser)
router.delete("/:id",verifyAdmin,verifyUser, deleteUser)
router.get("/:id",verifyUser, getUser)
router.get("/",verifyAdmin, getAllUser)

export default router