import express from "express"
import mongoose from "mongoose"
import cors from "cors"
import  userRoute from "./routes/userRoutes.js";
import dotenv from "dotenv"

 
const app = express();
dotenv.config()
app.use(cors());
app.use(express.json({limit:"30mb" ,extended:true}))
app.use(express.urlencoded({limit:"30mb" ,extended:true}))


const uri = process.env.DB_URI;
// mongoose.connect(uri).then(()=>{
//     console.log("Connected")
// }).catch((err)=>{
//     console.log(err)
// })


try {
    mongoose.connect(uri)
    console.log("Connected")
} catch (err) {
    console.log(err)
}



app.get('/', (req,res)=>{
    res.send("Hello World")
})
app.use( userRoute)
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is running at port ${port}`)
})

