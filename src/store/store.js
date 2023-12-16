import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../Feature/authSlice";

const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
