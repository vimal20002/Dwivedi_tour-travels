import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
bookings:Object
})
export const adminModal = mongoose.model("adminDetails",adminSchema);