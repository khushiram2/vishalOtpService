import * as dotenv from "dotenv";
import otpRouter from "./routes/otpRoutes.js";
import express from "express"
import cors from "cors"
import dbConnection from './database/dbconnection.js'
dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
await dbConnection()

app.use("/otp",otpRouter)
app.get("/locations",(req,res)=>{
const locations=[
    {
      name:"INDIA",
      lat:20.5937,
      lon:78.9629,
      count:2000
    },{
      name:"UK",
      lat:55.3781,
      lon:3.4360,
      count:890
    },{
      name:"USA",
      lat:37.0902,
      lon:95.7129,
      count:459
    },{
      name:"JAPAN",
      lat:36.2048,
      lon:138.2529,
      count:600
    },{
      name:"RUSSIA",
      lat:61.5240,
      lon:105.3188,
      count:3040
    },{
      name:"SPAIN",
      lat:40.4637,
      lon:3.7492,
      count:300
    },
{
      name:"GERMANY",
      lat:51.1657,
      lon:10.4515,
    }
  ]

  res.send({locations})
})
app.get("/test",(req,res)=>res.send("working fine"))








app.listen(process.env.PORT,()=>console.log("app started on port "+ process.env.PORT))


