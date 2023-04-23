import axios from "axios"
const API = axios.create({baseURL:"https://dwiveditour5.onrender.com"});
export const login = (formData)=>{
return API.post('/login', formData);
}
export const glogin = (formData)=>{
    return API.post('/googleLogin', formData);
    }
export const register=(formData)=>{
    return API.post('/register',formData);
}
export const cardFetch=()=>{
    return API.get('/gettour')
}
export const bookCabs=(formData)=>{
    return API.post('/bookcabs',formData);
}
export const userbooking=(formData)=>{
    return API.post('/userbooking',formData);
}
export const sendQuerry=(formData)=>{
    return API.post('/querry',formData);
}
export const genOtp=(formData)=>{
    return API.post('/genOtp',formData)
}
export const confirmOtp=(formData)=>{
    return API.post('/confirmOtp',formData)
}
export const updatePassword=(formData)=>{
    return API.post('/updatepassword',formData)
}
export const regOtp=(formData)=>{
    return API.post('/regotp',formData)
}
export const payConti=async(formData)=>{
    return await API.post('/checkout',formData)
    
}

