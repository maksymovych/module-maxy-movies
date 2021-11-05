import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getUserData } from "../../apis/auth";

export const initialState = {
  avatar: "",
  data: {},
  fielsd: [],
  isLoggedIn: false,
  loading: false,
  imagePath: "",
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (sessionId) => {
    const data = await getUserData(sessionId);
    return data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser(state, action) {
      state.data = action.payload;
      state.isLoggedIn = true;
    },
    addUserImgPath(state, action) {
      state.imagePath = action.payload;
    },

    extraReducers: {
      [fetchUser.pending](state) {
        state.loading = true;
      },
      [fetchUser.fulfilled](state, action) {
        state.data = action.payload.data;
        state.loading = false;
      },
      [fetchUser.rejected](state) {
        state.loading = false;
      },
    },
  },
});

export const { addUser, addUserImgPath } = userSlice.actions;
export const userReducer = userSlice.reducer;
