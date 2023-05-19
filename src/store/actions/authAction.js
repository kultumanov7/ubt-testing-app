import {createAsyncThunk} from "@reduxjs/toolkit";
import {AuthService} from "@api/services";

const authorize = createAsyncThunk(
    "auth/authorize",
    async (data, thunkAPI) => {
        try {
            const response = await AuthService.obtainToken(data);
            return response;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export {
    authorize,
};