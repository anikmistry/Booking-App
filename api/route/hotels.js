import express from "express"
import Hotel from "../models/hotels_model.js"

const router = express.Router()

//CREATE
router.post("/", async (req, res)=>{
    const newHotel = new Hotel(req.body)

    try {
        const saveHotel =await newHotel.save()
        console.log(saveHotel)
        console.log(saveHotel.name)
        res.status(200).json(saveHotel)
    } catch (err) {
        res.status(500).json(err)
    }

})
//UPDATE
//DELETE
//GET
//GET ALL
export default router
