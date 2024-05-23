import Router from "express";
import {sendOtp,verifyOtp} from '../controllers/otpControllers.js'
const router = Router()

router.post("/sendotp",sendOtp)
router.post("/verifyotp",verifyOtp)

const otpRouter=router
export default otpRouter 



