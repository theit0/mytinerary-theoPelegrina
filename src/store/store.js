import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducers/userReducer";
import cityReducers from "./reducers/cityReducers";

export const store = configureStore({
    reducer: { //Funciones que van a modificar mi estado
        userReducer,
        cityReducers
    }
})