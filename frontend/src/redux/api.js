import axios from "axios"
const API = axios.create({baseURL:"http://localhost:8000"});
export const login = (formData)=>{
return API.post('/login', formData);
}
export const register=(formData)=>{
    return API.post('/register',formData);
}
export const cardFetch=()=>{
    return API.get('/gettour')
}
