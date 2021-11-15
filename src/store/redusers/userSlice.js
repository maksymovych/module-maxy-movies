import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteSession_id, getUserData } from "../../apis/auth";

export const initialState = {
  isLoggedIn: true,
  loading: true,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (session_id) => {
    const data = await getUserData(session_id);
    localStorage.setItem("user", JSON.stringify(data));
  }
);

export const deleteSession = createAsyncThunk(
  "user/deleteSession",
  async (session_id) => {
    deleteSession_id(session_id);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setLogIn(state) {
      state.isLoggedIn = true;
    },
    setLogOut(state) {
      state.isLoggedIn = false;
    },
  },
  extraReducers: {
    [fetchUser.pending](state) {
      state.loading = true;
    },
    [fetchUser.fulfilled](state) {
      state.loading = false;
    },
    [fetchUser.rejected](state) {
      state.loading = false;
    },
    [deleteSession.fulfilled](state) {
      state.isLoggedIn = false;
    },
  },
});

export const { setLogIn, setLogOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
