import express from "express"
import { logIn, register, querry, googleLogin, bookCab, bookCargo, uploadImage, upldateInfo, genOtp, confirmOtp, updatePassword, addTour, getTour, getBookings, delBooking, updateTour, adminLogin, getQuerry, deltour } from "../controllers/controllers.js";
const userRoute = express.Router();
userRoute.post('/register',register);
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
userRoute.post('/addtour',addTour);
userRoute.get('/gettour',getTour);
userRoute.post('/deltour',deltour);
userRoute.post('/delbooking',delBooking);

userRoute.post('/getbookings',getBookings);

userRoute.patch('/updatetour',updateTour)
userRoute.post('/adminlogin',adminLogin)
userRoute.post('/getquerry',getQuerry)
export default userRoute