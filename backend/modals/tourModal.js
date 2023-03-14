import mongoose from "mongoose";
const tourSchema=new mongoose.Schema({
  title:String,
  Price:String,
  imgUrl:String
})
export const tourModal=mongoose.model("tours",tourSchema);