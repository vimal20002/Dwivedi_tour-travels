import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
name:String,
email:String,
password:String,
booking:[Object],
token:String,
})
export const UserModal = mongoose.model("userData",userSchema);