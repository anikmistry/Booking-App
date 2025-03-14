import Hotel from "../models/hotels_model.js"
//CREATE
export const createHotel = async (req, res,next)=>{
    const newHotel = new Hotel(req.body)

    try {
        const saveHotel =await newHotel.save()
        console.log(saveHotel)
        console.log(saveHotel.name)
        res.status(200).json(saveHotel)
    } catch (err) {
        next(err)
    }

}
//UPDATE
export const updateHotel = async(req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndUpdate(req.params.id,
             {$set: req.body},
              {new : true})
        console.log(updateHotel)
        res.status(200).json(updateHotel)
    } catch (err) {
        next(err)
    }
}
//DELETE
export const deleteHotel = async(req,res,next)=>{
    try {
        const updateHotel = await Hotel.findByIdAndDelete(req.params.id)
        res.status(200).json("Hotel has been deleted")
    } catch (err) {
        next(err)
    }
}
//GET
export const getHotel = async(req,res,next)=>{
    try {
        const hotel = await Hotel.findById(req.params.id)
        res.status(200).json(hotel)
    } catch (err) {
        next(err)
    }
}
//GET ALL
export const getAllHotel = async(req,res,next)=>{
    try {
        const hotels = await Hotel.find()
        res.status(200).json(hotels)
    } catch (err) {
        next(err)
    }
}