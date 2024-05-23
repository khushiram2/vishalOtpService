process.loadEnvFile()
import otpRouter from "./routes/otpRoutes.js";
import express from "express"
import cors from "cors"
import dbConnection from './database/dbconnection.js'
const app = express()
app.use(express.json())
app.use(cors())
await dbConnection()

app.use("/otp",otpRouter)

app.get("/test",(req,res)=>res.send("working fine"))








app.listen(process.env.PORT,()=>console.log("app started on port "+ process.env.PORT))


