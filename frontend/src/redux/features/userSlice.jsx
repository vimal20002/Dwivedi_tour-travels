import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import * as api from '../api'



export const login = createAsyncThunk("auth/login",async({formData, history,toast})=>{
    try {
        const res = await api.login(formData);
        if(res.data._id){
        toast.success("LogIn Successfull")
        history.push("/");
        return res.data;
        }
        else{
            toast.error(res.data.message);
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
})
export const glogin = createAsyncThunk("auth/glogin",async({formData, history,toast})=>{
    try {
        const res = await api.glogin(formData);
        if(res.data._id){
        toast.success("LogIn Successfull")
        history.push("/");
        return res.data;
        }
        else{
            toast.error(res.data.message);
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message);
    }
})
export const register=createAsyncThunk("auth/register",async({formData,toast},)=>{
    try {
        const response=await api.register(formData);
        console.log(response)
        if(response?.data?.message){
        toast.success(response.data.message);
        return response.data;
        }
        else{
            toast.error(response.data)
            return;
        }
    } catch (error) {
        console.log(error)
        toast.error(error.message)
       
    }
})
export const regOtp=createAsyncThunk("auth/regotp",async({formData,history,toast})=>{
    try {
        const response=await api.regOtp(formData);
        toast.success(response.data.message);
        history.push("/login");

        return;
    } catch (error) {
        console.log(error)
        toast.error(error.message)
       
    }
})
export const cardFetch=createAsyncThunk("gettour",async()=>{
    try {
        const response =await api.cardFetch();
        // console.log(response)
        return response?.data;
    } catch (error) {
        console.log(error);
    
    }
})
export const bookCabs=createAsyncThunk("bookcabs",async({formData,history,toast})=>{
    try {
        const response=await api.bookCabs(formData);
      
    if(response.data.message){
        toast.success(response.data.message);
        // history.push("/");
        localStorage.setItem("bk",JSON.stringify(response.data.bk))
    
    }else{
    toast.error("Something Went Wrong!")
    }
        return response.data;
    } catch (error) {
        console.log(error)
    }
}
)
export const sendQuerry=createAsyncThunk("querry",async({formData,history,toast})=>{
    try {
        const response=await api.sendQuerry(formData);
        if(response.data.message){
            toast.success(response.data.message)
            history.push("/")
            
        }
        else{
            toast.error("Something Went Wrong!")
        }
        return response.data;
    } catch (error) {
        console.log(error)
    }
})
export const logOut=createAsyncThunk("logout",async({history,toast})=>{
    try {
       
                   localStorage.removeItem("user");
                   history.push("/");
                   toast.success("Logged out Succefully !");
        
    } catch (error) {
        console.log(error);
    }
})
export const genOtp=createAsyncThunk("genOtp",async({formData,toast})=>{
    try {
        const response =await api.genOtp(formData);
        if(response.data.message){
            toast.success(response.data.message);
            
        }
        else{
            toast.error("Something Went Wrong!")
        }
    } catch (error) {
        console.log(error);
    }
})
export const confirmOtp=createAsyncThunk("confirmOtp",async({formData,history,toast})=>{
    try {
        const response=await api.confirmOtp(formData);
        if(response.data.message){
            toast.success(response.data.message);
            history.push("/changepassword");
           return response?.data;
        }
        else{
            toast.error("Something Went Wrong!")
        }
       
    } catch (error) {
        console.log(error)
    }
})
export const updatePassword=createAsyncThunk("updatepassword",async({formData,history,toast})=>{
    try {
        const response=await api.updatePassword(formData);
        if(response.data.message){
            toast.success("Password Changed Successfully");
            history.push("/");
        }
    } catch (error) {
        console.log(error);
    }
})
export const userbooking=createAsyncThunk("userbooking",async(formData)=>{
    try {
        const response=await api.userbooking(formData);
        return response.data;
    } catch (error) {
        console.log(error);
    }
})

const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        error:"",
        status:false,
        loading:false,
        booking:null,
        querry:null,
        logout:null,
        tour:null,
        bid:null,
    },

    extraReducers:{
        [login.pending]:(state, action)=>{
            state.loading=true;
        },
        [login.fulfilled]:(state, action)=>{
            state.loading=false;
            state.status=true;
            localStorage.setItem("user",JSON.stringify(action.payload));
            state.user = action.payload;
        },
        [login.rejected]:(state, action)=>{
            state.loading=false;
            state.status=false;
            state.error=action.payload.message;
        },
        [glogin.pending]:(state, action)=>{
            state.loading=true;
        },
        [glogin.fulfilled]:(state, action)=>{
            state.loading=false;
            state.status=true;
            localStorage.setItem("user",JSON.stringify(action.payload));
            state.user = action.payload;
        },
        [glogin.rejected]:(state, action)=>{
            state.loading=false;
            state.status=false;
            state.error=action.payload.message;
        },
        [cardFetch.pending]:(state, action)=>{
            state.loading=true;
        },
        [cardFetch.fulfilled]:(state, action)=>{
            state.loading=false;
            state.tour = action.payload;
        },
        [bookCabs.pending]:(state, action)=>{
            state.loading=true;
        },
        [bookCabs.fulfilled]:(state, action)=>{
            state.loading=false;
            state.bid=action.payload?.bk?._id
            localStorage.setItem("bid",JSON.stringify(action.payload?.bk?._id))
        },
        [bookCabs.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload?.message;
        },
        [userbooking.pending]:(state, action)=>{
            state.loading=true;
        },
        [userbooking.fulfilled]:(state, action)=>{
            state.loading=false;
            state.booking=action.payload;
        },
        [userbooking.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload?.message;
        },
        [sendQuerry.pending]:(state, action)=>{
            state.loading=true;
        },
        [sendQuerry.fulfilled]:(state, action)=>{
            state.loading=false;
            state.querry = action.payload?.data;
        },
        [sendQuerry.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload?.message;
        },
        [logOut.pending]:(state, action)=>{
            state.loading=true;
        },
        [logOut.fulfilled]:(state, action)=>{
            state.loading=false;
            state.status=false;
        },
        [logOut.rejected]:(state, action)=>{
            state.loading=false;
        },
        [genOtp.pending]:(state, action)=>{
            state.loading=true;
        },
        [genOtp.fulfilled]:(state, action)=>{
            state.loading=false;
        },
        [genOtp.rejected]:(state, action)=>{
            state.loading=false;
        },
        [confirmOtp.pending]:(state, action)=>{
            state.loading=true;
        },
        [confirmOtp.fulfilled]:(state, action)=>{
            state.loading=false;
        },
        [confirmOtp.rejected]:(state, action)=>{
            state.loading=false;
        },
        [updatePassword.pending]:(state, action)=>{
            state.loading=true;
        },
        [updatePassword.fulfilled]:(state, action)=>{
            state.loading=false;
        },
        [updatePassword.rejected]:(state, action)=>{
            state.loading=false;
        }
       
       
       

    }
})
export default userSlice.reducer