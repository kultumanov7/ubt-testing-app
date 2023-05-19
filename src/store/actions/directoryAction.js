import { createAsyncThunk } from "@reduxjs/toolkit";
import { DirectoryService } from "@api/services";

const fetchRegions = createAsyncThunk(
  "directory/fetchRegions",
  async (params, thunkAPI) => {
    try {
      return await DirectoryService.fetchRegions(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const fetchCities = createAsyncThunk(
  "directory/fetchCities",
  async (params, thunkAPI) => {
    try {
      return await DirectoryService.fetchCities(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

const fetchSchools = createAsyncThunk(
  "directory/fetchSchools",
  async (params, thunkAPI) => {
    try {
      return await DirectoryService.fetchSchools(params);
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export { fetchRegions, fetchCities, fetchSchools };
