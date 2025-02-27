import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./route/auth.js"
import hotelsRoute from "./route/hotels.js"
import roomsRoute from "./route/rooms.js"
import userRoute from "./route/user.js"

dotenv.config()



const app = express()

const connect = async ()=>{
    try {
        await mongoose.connect(process.env.MONGODB);
        console.log("connected mongodb")
      } catch (error) {
        throw error;
      }

}

mongoose.connection.on("disconnected", ()=>{
  console.log("mongoDB disconnectd")
})

//middlewares
app.use(express.json())
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/auth", roomsRoute)
app.use("/api/auth", userRoute)

app.listen(8000,()=>{
    connect()
    console.log("server is connected")
})