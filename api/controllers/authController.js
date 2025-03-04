import User from "../models/user_model.js"
import bcrypt from "bcryptjs"

export const register = async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const user = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })
        await user.save();
        res.status(200).send("user created successfully")
    } catch (err) {
        next(err)
    }
}