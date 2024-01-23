import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {},
    content: [],
  },
  reducers: {
    setSearchResult: (state, action) => {
      state.profile = action.payload;
    },
    setProfilesResult: (state, action) => {
      state.content = action.payload;
    },
  },
});

export const { setSearchResult, setProfilesResult } = userSlice.actions;
export const userReducer = userSlice.reducer;
