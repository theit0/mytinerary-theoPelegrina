import { createAction, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import Swal from "sweetalert2"

export const user_photo = createAction('user_photo',(obj)=>{
    console.log(obj)
    return {
        payload: {
            photo: obj.photo
        }
    }
})

export const user_login = createAsyncThunk('user_login',async (obj)=>{
    try {  
        const {data} = await axios.post('https://mytinerary-back-theopelegrina-production.up.railway.app/api/auth/signin',obj.data)
        localStorage.setItem('token',data.response.token)
        localStorage.setItem('user',JSON.stringify(data.response.user))
        Swal.fire({
            title: '¡Welcome!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Continue'
        })
        return {
            user: data.response.user,
            token:data.response.token
        } 
    } catch (error) {
        console.log(error)
        Swal.fire({
            title: 'Error',
            text: error.response.data.message,
            icon: 'error',
            confirmButtonText: 'Continue'
        })
        return {
            user:null
        }
    }
})

export const user_logout = createAsyncThunk('user_logout', async (_, thunkAPI) => {
    const token = localStorage.getItem('token');
    const config = {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    };

    try {
        await axios.post('https://mytinerary-back-theopelegrina-production.up.railway.app/api/auth/signout', null, config);
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        Swal.fire({
            title: '¡Goodbye!',
            text: 'Come back soon',
            icon: 'success',
            confirmButtonText: 'Continue'
        })
        return {
            user: null,
            token: null
        };
    } catch (error) {
        console.log(error);
        return thunkAPI.rejectWithValue(error.message);
    }
});

export const user_login_google = createAsyncThunk('user_login_google',async (obj)=>{
    try {  
        const {data} = await axios.post('https://mytinerary-back-theopelegrina-production.up.railway.app/api/auth/google',obj.data)
        localStorage.setItem('token',data.response.token)
        localStorage.setItem('user',JSON.stringify(data.response.user))
        Swal.fire({
            title: '¡Welcome!',
            text: data.message,
            icon: 'success',
            confirmButtonText: 'Continue'
        })
        return {
            user: data.response.user,
            token:data.response.token
        } 
    } catch (error) {
        console.log(error)
    }
})


export const user_signup = createAsyncThunk('user_signup',async (obj)=>{
    try {  
        const data = await axios.post('https://mytinerary-back-theopelegrina-production.up.railway.app/api/auth/signup',obj)
        
        return {
            user: data.response.user
        } 
    } catch (error) {
        
        console.log(error)
    }
})

export const user_token = createAction('user_token',(user)=>{
    return {
        payload: {
            user
        }
    }
})

