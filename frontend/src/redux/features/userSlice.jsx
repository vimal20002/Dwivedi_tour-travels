import {createAsyncThunk,createSlice} from "@reduxjs/toolkit"
import * as api from '../api'



export const login = createAsyncThunk("auth/login",async({formData, history,toast})=>{
    try {
        const res = await api.login(formData);
        console.log(res);
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
export const register=createAsyncThunk("auth/register",async({formData,history,toast})=>{
    try {
        const response=await api.register(formData);
        toast.success("Registered Successfully");
        history.push("/login");

        return response.data;
    } catch (error) {
        console.log(error)
        toast.error(error.message)
       
    }
})
export const cardFetch=createAsyncThunk("gettour",async()=>{
    try {
        const response =await api.cardFetch();
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
        history.push("/");
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
       
                   localStorage.removeItem("data");
                   history.push("/");
                   toast.success("Logged out Succefully !");
        
    } catch (error) {
        console.log(error);
    }
})
export const genOtp=createAsyncThunk("genOtp",async({formData,toast})=>{
    try {
        const response =await api.genOtp(formData);
        console.log(response);
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
        tour:null
    },

    extraReducers:{
        [login.pending]:(state, action)=>{
            state.loading=true;
        },
        [login.fulfilled]:(state, action)=>{
            state.loading=false;
            state.status=true;
            console.log(action.payload);
            localStorage.setItem("data",JSON.stringify(action.payload));
            state.user = action.payload.data;
        },
        [login.rejected]:(state, action)=>{
            state.loading=false;
            state.status=false;
            state.error=action.payload.message;
        },
        [register.pending]:(state, action)=>{
            state.loading=true;
        },
        [register.fulfilled]:(state, action)=>{
            state.loading=false;
            localStorage.setItem("data",JSON.stringify(action.payload));
            state.user = action.payload.data;
        },
        [register.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload.message;
        },
        [cardFetch.pending]:(state, action)=>{
            state.loading=true;
        },
        [cardFetch.fulfilled]:(state, action)=>{
            state.loading=false;
            localStorage.setItem("cards",JSON.stringify(action.payload));
            state.tour = action.payload?.data;
        },
        [bookCabs.pending]:(state, action)=>{
            state.loading=true;
        },
        [bookCabs.fulfilled]:(state, action)=>{
            state.loading=false;
            state.booking = action.payload?.data;
        },
        [bookCabs.rejected]:(state, action)=>{
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