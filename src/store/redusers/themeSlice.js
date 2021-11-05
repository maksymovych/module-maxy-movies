import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLightMode: true,
};

const themSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(state) {
      state.isLightMode = !state.isLightMode;
    },
  },
});

export const { changeTheme } = themSlice.actions;
export const themReducer = themSlice.reducer;
