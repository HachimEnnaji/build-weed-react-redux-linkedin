import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};
const articleSlice = createSlice({
  name: "articleReducer",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articleSlice.actions;
export const articleReducer = articleSlice.reducer;
