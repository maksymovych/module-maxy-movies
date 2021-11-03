import { createSlice } from "@reduxjs/toolkit";
export const initialState = {
  data: {},
  fielsd: [],
  isLoggedIn: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.data = action.payload;
      state.isLoggedIn = true;
    },
  },
});

export const { addUser } = userSlice.actions;
