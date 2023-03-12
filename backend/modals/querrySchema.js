import mongoose from "mongoose";
const querrySchema = new mongoose.Schema({
querry:Object
})
export const querryModal = mongoose.model("querry",querrySchema);