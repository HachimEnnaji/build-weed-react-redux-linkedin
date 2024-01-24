import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {},
    profiles: [],
    myExperience: null,
    refreshExp: false,
  },
  reducers: {
    setSearchResult: (state, action) => {
      state.profile = action.payload;
    },
    setAllProfilesResult: (state, action) => {
      state.profiles = action.payload;
    },
    setMyExperience: (state, action) => {
      state.myExperience = action.payload;
    },
    refreshExperience: (state) => {
      state.refreshExp = !state.refreshExp;
    },
  },
});

export const { setSearchResult, setProfilesResult, setAllProfilesResult, setMyExperience, refreshExperience } =
  userSlice.actions;
export const userReducer = userSlice.reducer;
