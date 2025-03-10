import express from "express"
import Hotel from "../models/hotels_model.js"
import { createHotel, deleteHotel, getAllHotel, getHotel, updateHotel } from "../controllers/hotelsControllers.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

router.post("/",verifyAdmin, createHotel)
router.put("/:id",verifyAdmin, updateHotel)
router.delete("/:id",verifyAdmin, deleteHotel)
router.get("/:id", getHotel)
router.get("/", getAllHotel)
export default router
