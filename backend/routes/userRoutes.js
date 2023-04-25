import express from "express"
import { logIn, register, querry, googleLogin, bookCab, bookCargo, uploadImage, upldateInfo, genOtp, confirmOtp, updatePassword, addTour, getTour, getBookings, delBooking, updateTour, adminLogin, getQuerry, deltour, confirmOtpSignup, payFun, paymentverification, getuserBooking, delreview } from "../controllers/controllers.js";
import { UserModal } from "../modals/userSchema.js";
const userRoute = express.Router();

//midleware
const adminValidate=async(req,res,next)=>{
    const admin = await UserModal.findOne({email:process.env.ADMIN_EMAIL})
    console.log("hey")
    if(admin?.token===req.body.token){
        next()
    }
    else{
        res.json({message:"You are not an admin"})
    }
}

//user
userRoute.post('/register',register);
userRoute.post('/regotp',confirmOtpSignup);
userRoute.post('/login',logIn);
userRoute.post('/bookcabs',bookCab);
userRoute.post('/bookcargo',bookCargo);
userRoute.post('/querry',querry);
userRoute.post('/googleLogin',googleLogin);
userRoute.post('/uploadimage',uploadImage);
userRoute.post('/updateinfo',upldateInfo);
userRoute.post('/genotp',genOtp);
userRoute.post('/confirmotp',confirmOtp);
userRoute.post('/updatepassword',updatePassword);
userRoute.post('/userbooking',getuserBooking)

//admin
userRoute.post('/addtour',adminValidate,addTour);
userRoute.get('/gettour',getTour);
userRoute.post('/deltour',adminValidate,deltour);
userRoute.post('/delreview',adminValidate,delreview);
userRoute.post('/delbooking',adminValidate,delBooking);
userRoute.post('/getbookings',adminValidate,getBookings);
userRoute.patch('/updatetour',adminValidate,updateTour)
userRoute.post('/adminlogin',adminLogin)
userRoute.post('/getquerry',adminValidate,getQuerry)

//payement
userRoute.post('/checkout',payFun)
userRoute.post('/verifypay',paymentverification)



export default userRoute