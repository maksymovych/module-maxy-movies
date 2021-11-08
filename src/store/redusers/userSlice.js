import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deliteSessionId, getUserData } from "../../apis/auth";

export const initialState = {
  avatar: "",
  data: {},
  fielsd: [],
  isLoggedIn: true,
  loading: true,
};

export const fetchUser = createAsyncThunk(
  "user/fetchUser",
  async (sessionId) => {
    const data = await getUserData(sessionId);
    return data;
  }
);

export const deliteSession = createAsyncThunk(
  "user/deliteSession",
  async (sessionId) => {
    const data = deliteSessionId(sessionId);
    console.log(data, sessionId);
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
