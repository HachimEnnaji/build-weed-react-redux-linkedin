import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    data: [],
  },
  reducers: {
    setSearchResult: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setSearchResult } = userSlice.actions;
export const userReducer = userSlice.reducer;
