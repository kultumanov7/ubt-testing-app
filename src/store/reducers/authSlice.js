import {createSlice} from "@reduxjs/toolkit";
import {authorize} from "@store/actions/authAction";
import { ACCESS_TOKEN } from "@utils/consts";

const initialState = {
    isLoading: false,
    error: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: {
        [authorize.pending.type]: (state) => {
            state.isLoading = true;
        },
        [authorize.fulfilled.type]: (state, action) => {
            localStorage.setItem(ACCESS_TOKEN, action.payload.access);
            window.location.href = "/profile";
            state.isLoading = false;
        },
        [authorize.rejected.type]: (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        }
    }
});

export default authSlice.reducer;