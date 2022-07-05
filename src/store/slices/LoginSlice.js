import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../API/API.service";

const initialState = {
  isLoggedIn: false,
  currentUser: {},
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logIn: (state, action) => {
      const isLoggedIn = usersAPI.logIn(action.payload);
      if (isLoggedIn) {
        state.isLoggedIn = true;
        state.currentUser = action.payload;
      } else {
        state.isLoggedIn = initialState.isLoggedIn;
        state.currentUser = initialState.currentUser;
      }
    },
    logOut: (state, action) => {
      usersAPI.logOut();
      state.isLoggedIn = initialState.isLoggedIn;
      state.currentUser = initialState.currentUser;
    },
    checkAuthenticated: (state, action) => {
      const currentUser = usersAPI.getCurrentUser();

      if (currentUser) {
        state.isLoggedIn = true;
        state.currentUser = currentUser;
      }
    },
  },
});

export default loginSlice.reducer;
export const { logIn, logOut, checkAuthenticated } = loginSlice.actions;

export const getIsLoggedInSelector = (state) => state.login.isLoggedIn;
export const getCurrentUser = (state) => state.login.currentUser;
