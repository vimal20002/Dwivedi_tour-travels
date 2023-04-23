import React from 'react'
import './login.css'
import jbrdstiimg from '../components/images/register.png'
import { regOtp, register } from '../redux/features/userSlice'
import { useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {toast} from "react-toastify"
import {useFormik} from "formik"
import * as Yup from "yup"

const Register = () => {
  const init = {
    name:"",
    email:"",
    password:"",
    phone:"",
    cpassword:"",
  }
  const formSchema = Yup.object({
    name:Yup.string().min(3,"Minimum 3 characters are required").max(25," Should not more than 25 char").required("Name is madantory feild"),
    email:Yup.string().email().required("Email is madantory feild"),
    phone:Yup.string().min(10,'Phone number must be 10 digit').max(10,'Phone number must be 10 digit').required("Phone  is madantory feild"),
    password:Yup.string().min(6).required("Password is madantory feild"),
    cpassword:Yup.string().required("Confirm password is madantory feild").min(6).oneOf([Yup.ref("password"), null], "Password must match"),
    otp:Yup.string().required("Otp is required feild")
  })
  const {values,handleBlur,handleSubmit,handleChange,touched,errors} = useFormik({
    initialValues:init,
    validationSchema:formSchema,
    onSubmit:(values)=>{
      console.log(values)
      handleSubmitt(values)
    }
  })


   const dispatch=useDispatch();
   const history=useHistory();
  const getOtp=({name,email,password,cpassword,phone})=>{
     console.log("h")
    const formData={
      name:name,
      email:email,
      password:password,
      phone:phone,
    }
if(password===cpassword){
        console.log(formData)
        dispatch(register({formData,toast}))
}
else{
  toast.error("Password dosen't macthed")
}
  }

const handleSubmitt = ({email,otp})=>{
  const formData = {
    email:email,
    otp:otp,
  }
  dispatch(regOtp({formData,history,toast}))
}


  return (
    <>
        <form onSubmit={handleSubmit}>
      <div className="registerForm">
        <img src={jbrdstiimg} alt="regimg" />
          <div>
        <input type="text" name="name" placeholder='Your Name'  value={values.name} onChange={handleChange} onBlur={handleBlur} id="name" />
          <p className='err' >{errors.name&&touched.name?errors.name:null}</p>
          </div>
          <div>
        <input type="email" name="email"   placeholder='info@example.com'  value={values.email} onChange={handleChange} onBlur={handleBlur} id="email" />
        <p className='err' >{errors.email&&touched.email?errors.email:null}</p>
          </div>
          <div>
        <input type="number" name="phone"   placeholder='9999999999'  value={values.phone} onChange={handleChange} onBlur={handleBlur} id="phone" />
        <p className='err' >{errors.phone&&touched.phone?errors.phone:null}</p>
          </div>
          <div>
        <input type="password" name="password"  placeholder='Password'  id="password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
        <p className='err' >{errors.password&&touched.password?errors.password:null}</p>
          </div>
          <div>   
        <input type="password" name="cpassword"   placeholder='Confirm Password'  id="cpassword" value={values.cpassword} onChange={handleChange} onBlur={handleBlur} />
        <p className='err' >{errors.cpassword&&touched.cpassword?errors.cpassword:null}</p>
          </div>
        <button type='button' className="book-btn" onClick={()=>{getOtp(values)}}>Get Otp</button>
        <div>

        <input type="text" name='otp' value={values.otp} onChange={handleChange} onBlur={handleBlur} placeholder='Enter Otp that you got on email'/>
        <p className='err' >{errors.otp&&touched.otp?errors.otp:null}</p>

        </div>
        <button type='submit' className="book-btn">
          Register
        </button>
      </div>
        </form>
    </>
  )
}

export default Register
