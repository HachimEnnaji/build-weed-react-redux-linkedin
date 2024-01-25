import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userSlice";
import { homePageReducer } from "../reducers/homePageSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    home: homePageReducer,
  },
});
