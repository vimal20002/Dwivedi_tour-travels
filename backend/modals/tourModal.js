import mongoose from "mongoose";
const tourSchema=new mongoose.Schema({
  tour:Object,
})
export const tourModal=mongoose.model("tour",tourSchema);