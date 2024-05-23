import Router from "express";
import {sendOtp,verifyOtp} from '../controllers/otpControllers.js'
const router = Router()

router.get("/sendotp",sendOtp)
router.post("/verifyotp",verifyOtp)

const otpRouter=router
export default otpRouter 



