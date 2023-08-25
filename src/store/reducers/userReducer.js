import { createReducer } from "@reduxjs/toolkit";
import { user_photo } from "../actions/userActions";

const initialState = {
    name: "Theo",
    photo: "https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar.png"
}

const userReducer = createReducer(initialState, 
    (builder) => builder
        .addCase(user_photo, (state,action) => {
            return {
                ...state,
                photo: action.payload.photo
            }
        })
)

export default userReducer