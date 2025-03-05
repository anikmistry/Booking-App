import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import authRoute from "./route/auth.js"
import hotelsRoute from "./route/hotels.js"
import roomsRoute from "./route/rooms.js"
import userRoute from "./route/user.js"
import cookieParser from "cookie-parser"

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
app.use(cookieParser())
app.use(express.json())
app.use(express.json({limit:"20kb"}))
app.use(express.urlencoded({extended:true}))
app.use(express.static("public"))
app.use("/api/auth", authRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/auth", roomsRoute)
app.use("/api/auth", userRoute)

app.use((err,req,res,next)=>{
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Somthing went wrong"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack
  })
})

app.listen(8000,()=>{
    connect()
    console.log("server is connected")
})