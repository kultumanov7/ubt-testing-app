import { createSlice } from "@reduxjs/toolkit";
import {
  fetchRegions,
  fetchCities,
  fetchSchools,
} from "@store/actions/directoryAction";

const initialState = {
  regions: [],
  cities: [],
  schools: [],
  isLoading: false,
  error: null,
};

export const directorySlice = createSlice({
  name: "directory",
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRegions.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRegions.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.regions = action.payload.results;
    },
    [fetchRegions.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchCities.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchCities.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.cities = action.payload.results;
    },
    [fetchCities.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [fetchSchools.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchSchools.fulfilled.type]: (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.schools = action.payload.results;
    },
    [fetchSchools.rejected.type]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default directorySlice.reducer;
