import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { discoverMovies } from "../../apis/auth";

export const initialState = {
  favorits: [],
  currentMovie: "",
  searchField: "",
  movies: {},
  isFetching: false,
  error: false,
};

export const fetchMovies = createAsyncThunk("movies/fetchMovies", async () => {
  const data = await discoverMovies();
  return data;
});

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addToFavorits(state, action) {
      state.favorits.push(action.payload);
    },
    removeFromFavorits(state, action) {
      state.favorits = state.favorits.filter((item) => item !== action.payload);
    },
    changeSearchField(state, action) {
      state.searchField = action.payload;
    },
    addCurrentMovie(state, action) {
      state.currentMovie = action.payload;
    },
  },
  extraReducers: {
    [fetchMovies.pending](state) {
      state.isFetching = true;
    },
    [fetchMovies.fulfilled](state, action) {
      state.movies = action.payload;
      state.isFetching = false;
    },
    [fetchMovies.rejected](state) {
      state.isFetching = false;
      state.error = true;
    },
  },
});

export const {
  addCurrentMovie,
  changeSearchField,
  addToFavorits,
  removeFromFavorits,
} = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
