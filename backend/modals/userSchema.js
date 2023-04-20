import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String,
googleId:String,
imageUrl:String,
bookings:[Object],
token:String,
otp:String,
type:String,
valid:Boolean,
pid:String,
})
export const UserModal = mongoose.model("userData",userSchema);