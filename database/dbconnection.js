import mongoose from "mongoose";

const dbConnection = async()=>{
  try {
    await mongoose.connect(process.env.DBURL)
    console.log("db connected via mongoose")
  } catch (error) {
    console.log(error)
  }
}

export default dbConnection
