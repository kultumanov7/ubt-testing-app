import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "./profileSlice";
import authReducer from "./authSlice";
import examsReducer from "./examsSlice";
import directorySlice from "./directorySlice";

const rootReducer = combineReducers({
  profile: profileReducer,
  auth: authReducer,
  exams: examsReducer,
  directory: directorySlice,
});

export default rootReducer;
