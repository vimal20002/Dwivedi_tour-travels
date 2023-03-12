import { UserModal } from "../modals/userSchema.js"
import { adminModal } from "../modals/adminModal.js"
import bcrypt from "bcryptjs"
import { querryModal } from "../modals/querrySchema.js"
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
            res.send("Invalid Credentials");
           }
         }
         else{
            res.send("User is not registered");

         }
    } catch (error) {
        res.send(error)
    }
}

export const booking=async(req,res)=>{
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
         const arr = user.booking;
         arr.push(nbooking)
         user.booking = arr;
         await user.save();
         const admininfo= new adminModal({booking:req.body});
         await admininfo.save();
         console.log(admininfo)
         res.json({message:"Cab booked successfully!"});
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