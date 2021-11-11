import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { delitesession_id, getUserData } from "../../apis/auth";

export const initialState = {
  avatar: "",
  data: {},
  fielsd: [],
  isLoggedIn: true,
  loading: true,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (session_id) => {
    const data = await getUserData(session_id);
    return data;
  }
);

export const deliteSession = createAsyncThunk(
  "user/deliteSession",
  async (session_id) => {
    delitesession_id(session_id);
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
    [fetchUser.fulfilled](state, action) {
      state.data = action.payload;
      state.loading = false;
    },
    [fetchUser.rejected](state) {
      state.loading = false;
    },
    [deliteSession.fulfilled](state) {
      state.isLoggedIn = false;
    },
  },
});

export const { setLogIn, setLogOut } = userSlice.actions;
export const userReducer = userSlice.reducer;
