import mongoose from "mongoose";
const adminSchema = new mongoose.Schema({
booking:Object
})
export const adminModal = mongoose.model("adminDetails",adminSchema);