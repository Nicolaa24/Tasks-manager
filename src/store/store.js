import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/LoginSlice";
import registerSlice from "./slices/RegisterSlice";

export const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
  },
});
