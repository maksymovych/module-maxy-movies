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
  searchFields: {},
  currentMovie: {},
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
  async ({ page, language, genres }) => {
    const data = await discoverMovies(page, language, genres);
    return data;
  }
);

export const fetchMarkAsFavorite = createAsyncThunk(
  "movies/fetchMarkAsFavorite",
  async ({ id, isFav, session_id }) => {
    await markAsFavorite(id, isFav, session_id);
  }
);

export const fetchFavorits = createAsyncThunk(
  "movies/fetchFavorits",
  async ({ session_id, page }) => {
    const data = await getFavorits(session_id, page);
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
    changeSearchFields(state, action) {
      state.searchFields = action.payload;
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

    [fetchFavorits.fulfilled](state, action) {
      state.favorits = action.payload;
      state.favoritId = action.payload.results.map(({ id }) => id);
    },
  },
});

export const { addCurrentMovie, changeSearchFields } = movieSlice.actions;
export const movieReducer = movieSlice.reducer;
