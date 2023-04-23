import { UserModal } from "../modals/userSchema.js"
import { adminModal } from "../modals/adminModal.js"
import bcrypt from "bcryptjs"
import { querryModal } from "../modals/querrySchema.js"
import nodemailer from "nodemailer"
import { tourModal } from "../modals/tourModal.js"
import { v4 as uuidv4 } from 'uuid';
export const register = async (req, res) => {
    try {
        let user = await UserModal.findOne({ email: req.body.email })
        // console.log(user)
        if (user !== null) {
            res.send("User Already Exists");
        }
        else {
            const salt = await bcrypt.genSalt(10)
            const hpass = await bcrypt.hash(req.body.password, salt);
            // console.log(req.body)
            const nuser = new UserModal({ ...req.body, password: hpass });
            console.log(nuser)
            await nuser.save();
            res.json(nuser);
        }

    } catch (error) {
        res.send(error)
    }

}

export const logIn=async(req,res)=>{
  
    try {
         const user=await UserModal.findOne({email:req.body.email});
         if(user!==null){
           const passwordCompare= await bcrypt.compare(req.body.password,user.password)
           if(passwordCompare){
            res.json(user);
           }
           else{
            res.json({message: "Invalid Credentials"});
           }
         }
         else{
          res.json({message: "Invalid Credentials"});

         }
    } catch (error) {
        res.send(error)
    }
}
export const googleLogin=async(req,res)=>{
    try {
        const user=await UserModal.findOne({googleId:req.body.googleId});
        if(user!=null){
           res.json(user);
        }
        else{
           const nuser= new UserModal(req.body) ;
           await nuser.save();
           res.json(nuser);
        }
    } catch (error) {
        res.send(error);
    }
}



export const bookCab=async(req,res)=>{
       try {
         const user=await UserModal.findOne({email:req.body.email});
         const nbooking={
            vehicle:req.body.vehicle,
            phone:req.body.phone,
            pickLoc:req.body.pickLoc,
            dest:req.body.dest,
            date:req.body.date,
            time:req.body.time,
            feed:req.body.feed
         }
         const arr = user.bookings;
         arr.push(nbooking)
         user.bookings = arr;
         await user.save();
         const admininfo= new adminModal({bookings:req.body});
         await admininfo.save();
         console.log(admininfo)
         res.json({message:"Cab booked successfully!"});
       } catch (error) {
        res.send(error);
       }
}
export const bookCargo=async(req,res)=>{
    try {
      const user=await UserModal.findOne({email:req.body.email});
      const nbooking={
         vehicle:req.body.vehicle,
         phone:req.body.phone,
         pickLoc:req.body.pickLoc,
         dest:req.body.dest,
         date:req.body.date,
         time:req.body.time,
         feed:req.body.feed
      }
      console.log(nbooking);
      const arr = user.bookings;
      arr.push(nbooking)
      user.bookings = arr;
      console.log(user);
      await user.save();
      console.log(user);
      const admininfo= new adminModal({bookings:req.body});
      await admininfo.save();
      console.log(admininfo)
      res.json({message:"Cargo booked successfully!"});
    } catch (error) {
     res.send(error);
    }
}
export const querry = async(req, res)=>{
const nquerry = new querryModal({querry:req.body});
await nquerry.save();
console.log(nquerry);
res.json({message:"Querry submited successfully!"});
}
export const uploadImage=async(req,res)=>{
   try {
    const user=await UserModal.findOne({email:req.body.email});
    user.imageUrl=req.body.imageUrl;
     await user.save();
    console.log(user);
     res.json({message:"Image Updated Successfully"});
   } catch (error) {
    res.send(error);
   }
}
export const upldateInfo=async(req,res)=>{
    try {
     const user=await UserModal.findOne({email:req.body.email});
     user.name=req.body.name;
      await user.save();
     console.log(user);
      res.json({message:"Information Updated Successfully"});
    } catch (error) {
     res.send(error);
    }
 }
 export const genOtp=async(req,res)=>{
   try {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++ ) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
   const user=await UserModal.findOne({email:req.body.email});
   if(user==null){
      res.json({message:"Register First"});
   }
   else{
       user.otp=OTP;
       await user.save();
   

      const transporter = nodemailer.createTransport({
        service:'outlook',
        auth: {
          user: 'dwiveditourtravels@outlook.com',
          pass: 'Vimalraghav$'
        }
    });
    
    var mailOptions = {
      from: 'dwiveditourtravels@outlook.com',
      to: req.body.email,
      subject: 'Verification for OTP of Dwivedi Tour&Travels',
      text: 'Your Otp for verification is '+OTP
    };
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent');
      }
      res.json({message:"Otp sent successfully"})
    });
   }
   } catch (error) {
    res.send(error);
   }
   
 }
 export const confirmOtp = async(req, res)=>{
  try {
    const user = await UserModal.findOne({email:req.body.email});
    if(user === null)
    {
      res.json({message:"User is not registered yet"});
    }
    else{
      if(req.body.otp===user.otp)
      {
        res.json({message:"Otp matched successfully", status:"matched"});
      }
      else{
        res.json({message:"Otp dosen't matched", status:"Unmatched"});
      }
    }
  } catch (error) {
    res.send(error);
  }

 }
 export const updatePassword=async(req,res)=>{
  try {
    const user=await UserModal.findOne({email:req.body.email});
    const salt = await bcrypt.genSalt(10)
    const npass = await bcrypt.hash(req.body.password, salt);
    user.password=npass;
    await user.save();
    res.json({message:"Password updated successfully"})
  } catch (error) {
    res.send(error);
  } 
 }
 export const addTour=async(req,res)=>{
  const admin = await UserModal.findOne({email:"shubham@admin.com"})
  if(admin.token===req.body.token){
      const tour=await tourModal.findOne({title:req.body.title});
      if(tour===null){
          const ntour=new tourModal({...req.body});
          await ntour.save();
          const data = await tourModal.find({});
          res.json(data);
       }
       else{
        res.json({message:"Tour already exists"})
       }
    }
    else{
      res.json({message:"You are not an admin"})
    }
    
 }
 export const getTour = async(req, res)=>{
  try {
    const data = await tourModal.find({});
    res.send(data);
  } catch (error) {
    res.send(error)
  }
 }
 

export const getBookings = async(req,res)=>{
  const admin = await UserModal.findOne({email:"shubham@admin.com"})
    if(admin?.token===req.body.token){
      const bookings = await adminModal.find( {});
      console.log(bookings)
      res.json(bookings)
    }
    else{
      res.json({message:"You are not an admin"})
    }
}

export const delBooking = async(req, res)=>{
  const admin = await UserModal.findOne({email:"shubham@admin.com"})
    if(admin?.token===req.body.token){
      await adminModal.deleteOne({_id:req.body._id})
      const data = await adminModal.find({});
      res.json(data)
    }
    else{
      res.json({message:"You are not an admin"})
    }
  
 }
export const deltour=async(req,res)=>{
  try {
    const admin = await UserModal.findOne({email:"shubham@admin.com"})
    if(admin.token===req.body.token){
      console.log("hey")
      await tourModal.deleteOne({_id:req.body._id})
  const data = await tourModal.find({});
  res.json(data);
    }
    else{
      res.json({message:"You are not an admin"})
    }
  } catch (error) {
    console.log(error)
  }

}
export const delreview=async(req,res)=>{
  console.log(req.body)
  try {
    const admin = await UserModal.findOne({email:"shubham@admin.com"})
    if(admin.token===req.body.token){
      await querryModal.deleteOne({_id:req.body._id})
  const data = await querryModal.find({});
  res.json(data);
    }
    else{
      res.json({message:"You are not an admin"})
    }
  } catch (error) {
    console.log(error)
  }

}
export const updateTour = async(req,res)=>{
  try {
    const admin = await UserModal.findOne({email:"shubham@admin.com"})
    if(admin?.token===req.body.token){
    await tourModal.updateOne({_id:req.body._id},{...req.body})
    const data = await tourModal.find({});
    res.json(data);
    }
    else{
      res.json({message:"You are not an admin"})
    }
  } catch (error) {
    console.log(error)
  }
}
export const adminLogin =async(req,res)=>{
  console.log(req.body)
try {
  const admin = await UserModal.findOne({email:req.body.email})
  const token = uuidv4();
  const date = new Date()
  console.log(date.getMonth())
  const pass = date.getUTCDate().toString()+(date.getMonth()+1).toString()+date.getFullYear().toString();
  if(pass===req.body.password){
  admin.token=token;
  await admin.save();
  console.log(admin)
  res.json({token:token})
  }
  else{
    res.json({message:"You are not an admin"})
  }
} catch (error) {
  console.log(error.message)
}
}
export const getQuerry = async(req,res)=>{
  try {
    const admin = await UserModal.findOne({email:"shubham@admin.com"})
    if(admin?.token===req.body.token){
    const data = await querryModal.find({})
    res.json(data);
    }
    else{
      res.json({message:"You are not an admin"})
    }
  } catch (error) {
    console.log(error)
  }
}