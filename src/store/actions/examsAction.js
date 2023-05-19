import { createAsyncThunk } from "@reduxjs/toolkit";
import { ExamsService } from "@api/services";

const fetchExams = createAsyncThunk("exams/fetch", async (params, thunkAPI) => {
  try {
    return await ExamsService.fetchExams(params);
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

const fetchEnrollments = createAsyncThunk(
  "exams/fetchEnrollments",
  async (params, thunkAPI) => {
    try {
      return await ExamsService.fetchEnrollments(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const startEnrollment = createAsyncThunk(
  "exams/startEnrollment",
  async (id, thunkAPI) => {
    try {
      return await ExamsService.startEnrollment(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const getQuestions = createAsyncThunk(
  "exams/getQuestions",
  async (id, thunkAPI) => {
    try {
      return await ExamsService.getQuestions(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const completeEnrollment = createAsyncThunk(
  "exams/completeEnrollment",
  async (id, thunkAPI) => {
    try {
      return await ExamsService.completeEnrollment(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const saveResponses = createAsyncThunk(
  "exams/saveResponses",
  async (data, thunkAPI) => {
    try {
      await ExamsService.saveResponses(data.id, data.data);
      return data.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const fetchEnrollment = createAsyncThunk(
  "exams/fetchEnrollment",
  async (id, thunkAPI) => {
    try {
      return await ExamsService.fetchEnrollment(id);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export {
  fetchExams,
  fetchEnrollments,
  startEnrollment,
  fetchEnrollment,
  getQuestions,
  completeEnrollment,
  saveResponses,
};
