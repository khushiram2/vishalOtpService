import mongoose from "mongoose";

const otpSchema= new mongoose.Schema({
  number:{type:Number,required:true},
  otp:{type:String,required:true},
  createAt:{type:Date,default:Date.now(),expires:300}
})

const otpModel=mongoose.model("otp",otpSchema);

export default otpModel

