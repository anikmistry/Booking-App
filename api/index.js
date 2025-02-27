import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"

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

app.listen(8000,()=>{
    connect()
    console.log("server is connected")
})