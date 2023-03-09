import express from "express"
import { logIn, register,booking } from "../controllers/controllers.js";
const userRoute = express.Router();
userRoute.post('/register',register);
userRoute.post('/login',logIn);
userRoute.post('/bookcabs',booking);
export default userRoute