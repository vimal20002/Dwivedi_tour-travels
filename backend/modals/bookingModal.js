import mongoose from "mongoose";
const bookingSchema = mongoose.Schema({
    name:String,
    email:String,
    pickLoc:String,
    dest:String,
    date:String,
    time:String,
    paid:Boolean,
    pid:String,
    price:String
})
export const Bookingmodal=mongoose.model('booking',bookingSchema)