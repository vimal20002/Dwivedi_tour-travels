import React, { useEffect } from 'react'
import'./login.css'
import profileimg from '../components/images/profile.png'
import { Link ,useHistory} from 'react-router-dom'
import { GoogleLogin } from "react-google-login"
import { gapi } from 'gapi-script';
import { useDispatch} from 'react-redux'
import { glogin, login } from '../redux/features/userSlice'
import {toast} from "react-toastify"
import {useFormik} from "formik"
import * as Yup from "yup"



const LogIn = () => {
  const init ={
    email:"",
    password:""
  }
  const formSchema=Yup.object({
    email:Yup.string().email().required("Email is a required feild"),
    password:Yup.string().min(6,"Min 6 characters in password").required("Password is required feild")
  })
  const {values,handleBlur,handleChange,handleSubmit,errors,touched} = useFormik({
    initialValues:init,
    validationSchema:formSchema,
    onSubmit:(values,action)=>{
      submitForm(values)
      action.resetForm();
    }
  })
  const history = useHistory()
  const dispatch = useDispatch();


   const submitForm=({email,password})=>{
       const formData={
        email:email,
        password:password
       }
       if(formData.email && formData.password){
       dispatch(login({formData, history,toast}));

       }
   }
   const onSuccess = (resp) => {
  console.log(resp)
    const formData={
      email:resp.profileObj.email,
      name:resp.profileObj.familyName,
      googleId:resp.profileObj.googleId,
      imageUrl:resp.profileObj.imageUrl
    }
    dispatch(glogin({formData,history,toast}))
  }
  const onFailure = (err) => {
    console.log(err)
  }
const clientId =process.env.REACT_APP_CLIENT_ID
useEffect(() => {
  const initClient = () => {
    gapi.client.init({
      clientId: clientId,
      scope: ''
    });
  };
  gapi.load('client:auth2', initClient);
});


  return (
    <>
    <form onSubmit={handleSubmit}>
     <div className="loginForm">
       <img src={profileimg} alt="profileimg" />
       <div>

      <input type="email" name="email" placeholder='info@example.com' value={values.email} onChange={handleChange} onBlur={handleBlur}   id="email" />
      <p className='err'>{errors.email&&touched.email?errors.email:null}</p>

       </div>
       <div>

      <input type="password" name="password" placeholder='password'  value={values.password} onChange={handleChange} onBlur={handleBlur}   id="password" />
      <p className='err'>{errors.password&&touched.password?errors.password:null}</p>
       </div>
     <Link to='/getemail'><h4 className='forgot-password'>Forgot Password ?</h4></Link> 
      <button type='submit' className="book-btn"   >
        
        Log In</button>
      <p>Do not have an account ? <Link to="/register"><span className='registeropt' >Register</span></Link></p>
       <h2>OR</h2>
     <div>
     <GoogleLogin
          clientId={clientId}
          buttonText="Continue with Google"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          redirectUri='https://dwiveditourstravels.com/'
        />
     </div>
     </div>
     </form>
    </>
  )
}
export default LogIn
