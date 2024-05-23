import sendSMS from "../utils/SNSutils.js";
import {randomInt} from "crypto"
import otpModel from "../models/otpModel.js"


export async function sendOtp (req,res) {
  try {
    const otp=randomInt(1000,10000)
    const number="+919729892769"
    const hash="0U5lmlXfi0d"
    const otpstored=await otpModel.create({number:number,otp:otp})
    const smsTemplate=`Your verification code is ${otp}. Please use this code to verify your account. This code will expire in 5 minutes.\n\n #${hash}`
    await sendSMS(number,smsTemplate);
res.status(200).send({message:"message sent sucessfully"})
  } catch (error) {
    res.status(500).send({message:"internal server error"})
  }
}

export function verifyOtp (req,res) {
  try {
    
  } catch (error) {
    
  }
}




