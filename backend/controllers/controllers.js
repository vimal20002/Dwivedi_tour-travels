import { UserModal } from "../modals/userSchema.js"
import { adminModal } from "../modals/adminModal.js"
import bcrypt from "bcryptjs"
import { querryModal } from "../modals/querrySchema.js"
import nodemailer from "nodemailer"
import { tourModal } from "../modals/tourModal.js"
import { v4 as uuidv4 } from 'uuid';
import Razorpay from "razorpay"
import crypto from "crypto"
import { Payement } from "../modals/payementModal.js"
import { Bookingmodal } from "../modals/bookingModal.js"
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
            
            var digits = '0123456789';
            let OTP = '';
            for (let i = 0; i < 4; i++ ) {
              OTP += digits[Math.floor(Math.random() * 10)];
            }
            const nuser = new UserModal({ ...req.body, password: hpass,otp:OTP });
            nuser.valid=false;
            console.log(nuser)
            await nuser.save();



         const transporter = nodemailer.createTransport({
          service:'outlook',
          pool:true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.EMAIL_PASS
          }
      });
      
      var mailOptions = {
        from: process.env.SMTP_USER,
        to: req.body.email,
        subject: 'OTP For Your Email confirmation',
        text: `Dear Customer,\n
        Otp for your email verification is${OTP} confirm your email to start journey with us\n
        Regards,\n
        Shubham Dwivedi (Founder & CEO DT&Travels)`
      };
      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent');
        }
      })
            res.json({message:"Otp sent Successfully check mail(Check spam section also)!"});
        }

    } catch (error) {
        res.send(error)
    }

}
setTimeout(async()=>{
  const users = await UserModal.find({});
  users?.map(async(e)=>{
    if(e?.valid===false)
    {
      await UserModal.deleteOne({email:e.email});
    }
  })

},5*60*1000)
export const confirmOtpSignup=async(req,res)=>{
  console.log(req.body)
try {
  const user = await UserModal.findOne({email:req.body.email})
  if(user?.otp===req.body.otp)
  {
    user.valid =true;
    await user.save();
    res.json({message:"Verified successfully"})
  }
  else{
    user.valid =false;
    await user.save();
    res.json({message:"Invalid Otp"})
  }
} catch (error) {
  console.log(error)
}
}
export const logIn=async(req,res)=>{
  
    try {
         const user=await UserModal.findOne({email:req.body.email});
         if(user!==null){
           const passwordCompare= await bcrypt.compare(req.body.password,user.password)
           if(passwordCompare && user.valid){
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

export const getuserBooking=async(req,res)=>{
  console.log(req.body)
  try {
    const data = await Bookingmodal.find({email:req.body.email})
    console.log(data)
   res.json(data);
  } catch (error) {
    console.log(error)
  }
}


export const bookCab=async(req,res)=>{
       try {
        console.log(req.body);
         const user=await UserModal.findOne({email:req.body.email});
         const username=user.name;
         const nbooking={
          name:username,
          email:req.body.email,
            pickLoc:req.body.pickLoc,
            dest:req.body.dest,
            date:req.body.date,
            time:req.body.time,
            price:req.body.price,
            phone:req.body.phone,
            type:"Cab"
         }
   
        const bk=new Bookingmodal(nbooking)
        await bk.save()
         var digits = '0123456789';
         let OTP = '';
         for (let i = 0; i < 4; i++ ) {
             OTP += digits[Math.floor(Math.random() * 10)];
         }



         const transporter1 = nodemailer.createTransport({
          service:'outlook',
          pool:true,
          maxConnections:20,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.EMAIL_PASS,
          }
      });
      
      var mailOptions = {
        from: process.env.SMTP_USER,
        to: req.body.email,
        subject: 'OTP For Your Ride',
        text: `Dear Customer,   
   Your Cab Has Been Booked Succefully.Please Share The Given OTP  ${OTP}  With Our Driver To Start Your Ride. Happey Journey ! 
   for any issue contact to 8318891285

        Regards,
        Shubham Dwivedi (Founder & CEO DT&Travels)`
      };
       transporter1.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent');
        }
      })
      const transporter2 = nodemailer.createTransport({
        service:'outlook',
        pool:true,
        maxConnections:20,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.EMAIL_PASS,
        }
    });
    setTimeout(()=>{
      var mailOptionss = {
        from: process.env.SMTP_USER,
        to: process.env.OWNER_EMAIL,
        subject: 'New Booking',
        text: `Dear Owner,
        There has been a booking from  ${username} for a ride. His confirmation OTP is ${OTP}.
        You can contact him at ${req.body.phone} for further details`
      };
      transporter2.sendMail(mailOptionss, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent');
        }
      })
  
    },60*1000)
  
         res.json({message:"Cab booked successfully! Check Mail(Check spam section also)!",bk:bk});
       } catch (error) {
        res.send(error);
       }  
      
}
export const bookCargo=async(req,res)=>{
  try {
    console.log(req.body);
     const user=await UserModal.findOne({email:req.body.email});
     const username=user.name;
     const nbooking={
      name:username,
      email:req.body.email,
        pickLoc:req.body.pickLoc,
        dest:req.body.dest,
        date:req.body.date,
        time:req.body.time,
        price:req.body.price,
        type:"Cargo"
     }

    const bk=new Bookingmodal(nbooking)
    await bk.save()
     var digits = '0123456789';
     let OTP = '';
     for (let i = 0; i < 4; i++ ) {
         OTP += digits[Math.floor(Math.random() * 10)];
     }



     const transporter1 = nodemailer.createTransport({
      service:'outlook',
      pool:true,
      maxConnections:20,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.EMAIL_PASS,
      }
  });
  
  var mailOptions = {
    from: process.env.SMTP_USER,
    to: req.body.email,
    subject: 'OTP For Your Ride',
    text: `Dear Customer,   
           Your Cargo Has Been Booked Succefully.Please Share The Given OTP  ${OTP}  With Our Driver To Start Your Ride. Happey Journey ! 
           for any issue contact to 8318891285
    Regards,
    Shubham Dwivedi (Founder & CEO DT&Travels)`
  };
   transporter1.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }
  })
  const transporter2 = nodemailer.createTransport({
    service:'outlook',
    pool:true,
    maxConnections:20,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.EMAIL_PASS,
    }
});
setTimeout(()=>{
  var mailOptionss = {
    from: process.env.SMTP_USER,
    to: process.env.OWNER_EMAIL,
    subject: 'New Booking',
    text: `Dear Owner,
    There has been a booking from  ${username} for a ride. His confirmation OTP is ${OTP}.
    You can contact him at ${req.body.phone} for further details`
  };
  transporter2.sendMail(mailOptionss, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent');
    }
  })

},60*1000)

     res.json({message:"Cargo booked successfully! Check Mail(Check spam section also)!",bk:bk});
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
    console.log(req.body);
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
          user: process.env.SMTP_USER,
          pass: process.env.EMAIL_PASS,
        }
    });
    
    var mailOptions = {
      from: process.env.SMTP_USER,
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
      res.json({message:"Otp sent successfully check mail (Check spam section also)!"})
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
    
    
 

 export const getTour = async(req, res)=>{
  try {
    const data = await tourModal.find({});
    console.log(data)
    res.send(data);
  } catch (error) {
    res.send(error)
  }
 }
 
 export const getBookings = async(req,res)=>{
  
      const bookings = await Bookingmodal.find( {});
      console.log(bookings)
      res.json(bookings)
    
}

export const delBooking = async(req, res)=>{

      await Bookingmodal.deleteOne({_id:req.body._id})
      const data = await Bookingmodal.find({});
      res.json(data)
   
  
 }
export const deltour=async(req,res)=>{
  try {
   
      await tourModal.deleteOne({_id:req.body._id})
  const data = await tourModal.find({});
  res.json(data);
   
  } catch (error) {
    console.log(error)
  }

}
export const delreview=async(req,res)=>{
  console.log(req.body)
  try {
  
      await querryModal.deleteOne({_id:req.body._id})
  const data = await querryModal.find({});
  res.json(data);
    
  } catch (error) {
    console.log(error)
  }

}
export const updateTour = async(req,res)=>{
  try {
    await tourModal.updateOne({_id:req.body._id},{...req.body})
    const data = await tourModal.find({});
    res.json(data);
    
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
  console.log(date.toLocaleDateString())
  const pass =date.toLocaleDateString();
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
   
    const data = await querryModal.find({})
    res.json(data);
  } catch (error) {
    console.log(error)
  }
}

export const payFun =async(req, res)=>{
  console.log(req.body)
    try {
        console.log(req.body.amount)
         const instance = new Razorpay({
            key_id: "rzp_test_hnhwpr4PlYB0mw",
            key_secret: "Nub46Ml99qlMjqR5lgyWuMRu",
          });
          const options = {
            amount: Number(req.body.amount*100), // amount in the smallest currency unit
            currency: "INR",
          };
          const order = await instance.orders.create(options) 
        const bk=await Bookingmodal.findOne({_id:req.body._id});
        bk.pid = order?.id
        bk.price=req.body.amount;
        await bk.save()
        console.log(bk)
        res.json(order);  
    } catch (error) {
        console.log(error)
    }
    
}
export const paymentverification =async(req, res)=>{
  console.log(req.body)
  let body=req.body.razorpay_order_id + "|" + req.body.razorpay_payment_id;

  var expectedSignature = crypto.createHmac('sha256', secret)
                                  .update(body.toString())
                                  .digest('hex');
  if(expectedSignature === req.body.razorpay_signature){
   const py= new Payement(req.body)
   console.log(py)
   await py.save();
   const bk=await Bookingmodal.findOne({pid:req.body.razorpay_order_id});
   bk.paid = true;
   await bk.save();
      res.redirect("https://dwiveditourstravels.com");
  }
}