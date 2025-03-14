import User from "../models/user_model.js"
import bcrypt from "bcryptjs"
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken"

export const register = async (req,res,next)=>{
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            ...req.body,password: hash
        })
        await user.save();
        res.status(200).send("user created successfully")
    } catch (err) {
        next(err)
    }
}

//login

export const login = async(req,res,next)=>{
    
    const JWT_SECRET = process.env.JWT_SECRET
    try {
        const user =await User.findOne({username:req.body.username})

        if(!user) return next(createError(404,"user is not found"));

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400,"wrong password"));
        const payload = {id: user._id, isAdmin: user.isAdmin}
        const token = jwt.sign(payload,JWT_SECRET)
        
        //const{ password ,isAdmin, ...otherDetails} = user._doc
        res
        .cookie("access_token", token,{
            httpOnly: true
        })
        .status(200).json(user)
    } catch (err) {
        next(err)
    }

}