import { createSlice } from "@reduxjs/toolkit";
import { usersAPI } from "../../API/API.service";

const initialState = {
  users: [],
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addNewUser: (state, action) => {
      const isUserCreated = usersAPI.addNewUser(action.payload); // true || false
      if (isUserCreated) {
        state.users.push(action.payload);
        alert("User has been created successfully!");
      } else {
        alert("User is not created");
      }
    },
  },
});

export default registerSlice.reducer;

export const { addNewUser } = registerSlice.actions;

export const getRegisteredUsersSelector = (state) => state.register.users;
