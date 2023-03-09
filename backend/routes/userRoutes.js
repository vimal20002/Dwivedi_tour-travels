import express from "express"
import { register } from "../controllers/controllers.js";
const userRoute = express.Router();
userRoute.post('/register',register)
export default userRoute