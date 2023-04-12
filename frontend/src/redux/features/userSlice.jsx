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
const userSlice = createSlice({
    name:"user",
    initialState:{
        user:null,
        error:"",
        status:false,
        loading:false,
        tour:null
    },

    extraReducers:{
        [login.pending]:(state, action)=>{
            state.loading=true;
        },
        [login.fulfilled]:(state, action)=>{
            state.loading=false;
            state.status=true;
            localStorage.setItem("data",JSON.stringify({...action.payload.data}));
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
            localStorage.setItem("data",JSON.stringify({...action.payload.data}));
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
        [register.rejected]:(state, action)=>{
            state.loading=false;
            state.error=action.payload.message;
        }

    }
})
export default userSlice.reducer