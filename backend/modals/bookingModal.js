import mongoose from "mongoose";
const bookingSchema = mongoose.Schema({
    name:String,
    email:String,
    pickLoc:String,
    dest:String,
    date:String,
    phone:String,
    time:String,
    paid:Boolean,
    pid:String,
    price:String,
    type:String
})
export const Bookingmodal=mongoose.model('booking',bookingSchema)