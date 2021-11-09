import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  discoverMovies,
  getFavorits,
  markAsFavorite,
  searchMovie,
} from "../../apis/auth";

export const initialState = {
  favorits: {},
  favoritId: [],
  currentMovie: "",
  movies: {},
  isFetching: false,
  error: false,
};

export const fetchSearchMovie = createAsyncThunk(
  "movies/fetchSearchMovie",
  async ({ text, page }) => {
    const data = await searchMovie(text, page);
    return data;
  }
);

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (page) => {
    console.log(page);
    const data = await discoverMovies(page);
    return data;
  }
);

export const fetchMarkAsFavorite = createAsyncThunk(
  "movies/fetchMarkAsFavorite",
  async ({ id, isFav, sessionId }) => {
    await markAsFavorite(id, isFav, sessionId);
  }
);

export const fetchFavorits = createAsyncThunk(
  "movies/fetchFavorits",
  async (sessioId) => {
    const data = await getFavorits(sessioId);
    return data;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
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
    [fetchSearchMovie.pending](state) {
      state.isFetching = true;
    },
    [fetchSearchMovie.fulfilled](state, action) {
      state.search = true;
      state.movies = action.payload;
      state.isFetching = false;
    },
    [fetchSearchMovie.rejected](state) {
      state.isFetching = false;
      state.error = true;
    },
    [fetchMarkAsFavorite.pending](state) {
      state.isFetching = true;
    },
    [fetchMarkAsFavorite.fulfilled](state) {
      state.isFetching = false;
    },
    [fetchFavorits.pending](state) {
      state.isFetching = true;
    },
    [fetchFavorits.fulfilled](state, action) {
      state.isFetching = false;
      state.favorits = action.payload;
      state.favoritId = action.payload.results.map(({ id }) => id);
    },
  },
});

export const { addCurrentMovie } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
