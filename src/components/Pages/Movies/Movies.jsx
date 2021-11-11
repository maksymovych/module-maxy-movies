import React from "react";
import { Grid, Stack } from "@mui/material";
import NavBar from "../../NavBar/NavBar";
import SearchMovie from "../../ui/SearchMovie/SearchMovie";
import ProfileLink from "../../ProfileLink/ProfileLink";
import BasicPagination from "../../ui/Pagination/Pagination";
import { useStateDispatch } from "../../../utils/hoocks/useStateDispatch";
import {
  changeSearchInput,
  fetchFavorits,
  fetchMovies,
  fetchSearchMovie,
} from "../../../store/redusers";
import CardMovie from "./CardMovie";
import Loader from "../../ui/Loader/Loader";
import { Box } from "@mui/system";
import SortCard from "./SortCard";

function Movies() {
  const [
    { movies, favoritId, isFetching, searchFields, searchInput },
    dispatch,
  ] = useStateDispatch("movies");
  const { page, results, total_pages } = movies;

  if (!favoritId?.length && !isFetching) {
    const session_id = localStorage.getItem("session_id");
    dispatch(fetchFavorits({ session_id }));
  }

  if (!results?.length && !isFetching) {
    dispatch(fetchMovies({ language: "en" }));
  }

  const handleChangeSearchInput = (e) => {
    const text = e.target.value;
    dispatch(changeSearchInput(text));

    if (text.length < 2) return;
    dispatch(fetchSearchMovie({ text }));
  };

  const changePage = (_, page) => {
    const text = searchInput;
    const language = searchFields.language;
    const genres = searchFields.genres;
    !!searchInput
      ? dispatch(fetchSearchMovie({ text, page }))
      : dispatch(fetchMovies({ page, language, genres }));
  };

  return (
    <>
      <NavBar>
        <Stack direction="row" spacing={1}>
          <ProfileLink />
          <SearchMovie value={searchInput} onChange={handleChangeSearchInput} />
        </Stack>
      </NavBar>

      {!page ? (
        <Loader />
      ) : (
        <BasicPagination
          pageAmount={total_pages}
          page={page}
          onChange={changePage}
        />
      )}
      <Box
        sx={{
          display: { sm: "flex" },
          alignItems: "flex-start",
        }}
      >
        <SortCard />
        <Grid container spacing={3} direction="row" justifyContent="center">
          {results &&
            results.map(
              ({
                backdrop_path,
                poster_path,
                id,
                original_title,
                overview,
                vote_average,
                release_date,
              }) => (
                <CardMovie
                  key={id}
                  id={id}
                  name={original_title}
                  path={backdrop_path}
                  title={overview}
                  raiting={vote_average}
                  reliase={release_date}
                  poster={poster_path}
                  favorits={favoritId}
                />
              )
            )}
        </Grid>
      </Box>
    </>
  );
}

export default Movies;
