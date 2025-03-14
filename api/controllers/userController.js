import User from "../models/user_model.js"


//UPDATE
export const updateUser = async(req,res,next)=>{
    try {
        const updateUser = await User.findByIdAndUpdate(req.params.id,
             {$set: req.body},
              {new : true})
        console.log(updateUser)
        res.status(200).json(updateUser)
    } catch (err) {
        next(err)
    }
}
//DELETE
export const deleteUser = async(req,res,next)=>{
    try {
        const deleteUser = await User.findByIdAndDelete(req.params.id)
        res.status(200).json("User has been deleted")
    } catch (err) {
        next(err)
    }
}
//GET
export const getUser = async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.id)
        res.status(200).json(user)
    } catch (err) {
        next(err)
    }
}
//GET ALL
export const getAllUser = async(req,res,next)=>{
    try {
        const users = await User.find()
        res.status(200).json(users)
    } catch (err) {
        next(err)
    }
}