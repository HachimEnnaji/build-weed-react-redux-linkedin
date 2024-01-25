import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userSlice";
import { homePageReducer } from "../reducers/homePageSlice";
import { articleReducer } from "../reducers/articleSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    home: homePageReducer,
    journal: articleReducer,
  },
});
