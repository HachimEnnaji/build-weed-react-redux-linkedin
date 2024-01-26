import { createSlice } from "@reduxjs/toolkit";

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    list: [],
  },
  reducers: {
    setListJobs: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setListJobs } = jobSlice.actions;
export const jobReducer = jobSlice.reducer;
