import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  allPost: null,
  refreshPost: false,
};

const homePageSlice = createSlice({
  name: "homePageReducer",
  initialState,
  reducers: {
    setAllPost: (state, action) => {
      state.allPost = action.payload;
    },
    refreshHomePost: (state) => {
      state.refreshPost = !state.refreshPost;
    },
  },
});

export const { setAllPost, refreshHomePost } = homePageSlice.actions;
export const homePageReducer = homePageSlice.reducer;
