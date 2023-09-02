import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const get_cities = createAsyncThunk('get_cities',async()=>{
    
    try {
        const response = await axios.get('http://localhost:3000/api/cities')
        return {
            cities: response.data.cities
        }
    } catch (error) {
        
    } 
    
})

export const filter_cities = createAsyncThunk('filter_cities',async(obj)=>{
    
    try {
        const response = await axios.get(`http://localhost:3000/api/cities?name=${obj.name}`)
        return {
            cities: response.data.cities
        }
    } catch (error) {
        return {
            cities: []
        }
    } 
    
})

export const get_city = createAsyncThunk('get_city', async (id) => {
    try {
        const response = await axios.get(`http://localhost:3000/api/cities/${id}`);
        console.log(response)

        return {
            city: response.data.city
        };
    } catch (error) {
    }
});
