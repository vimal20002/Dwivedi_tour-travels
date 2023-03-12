import express from "express"
import { logIn, register,booking, querry } from "../controllers/controllers.js";
const userRoute = express.Router();
userRoute.post('/register',register);
userRoute.post('/login',logIn);
userRoute.post('/bookcabs',booking);
userRoute.post('/querry',querry)
export default userRoute