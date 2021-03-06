import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import NavBar from "../../NavBar/NavBar";
import SearchMovie from "../../ui/SearchMovie/SearchMovie";
import ProfileLink from "../../ProfileLink/ProfileLink";
import BasicPagination from "../../ui/Pagination/Pagination";
import { useStateDispatch } from "../../../utils/hoocks/useStateDispatch";
import {
  fetchFavorits,
  fetchMovies,
  fetchSearchMovie,
} from "../../../store/redusers";
import CardMovie from "./CardMovie";
import Loader from "../../ui/Loader/Loader";
import SortCard from "./SortCard";

function Movies() {
  const [{ movies, favoritId, isFetching, searchFields }, dispatch] =
    useStateDispatch("movies");

  const [searchInput, setSearchInput] = useState("");
  const { page, results, total_pages } = movies;

  if (!favoritId?.length && localStorage.getItem("user")) {
    const session_id = localStorage.getItem("session_id");
    dispatch(fetchFavorits({ session_id }));
  }

  if (!results?.length && !isFetching) {
    dispatch(fetchMovies({ language: "en" }));
  }

  const handleChangeSearchInput = (e) => {
    const text = e.target.value.toLowerCase();
    !text
      ? dispatch(fetchMovies({ language: "en" }))
      : dispatch(fetchSearchMovie({ text }));
    setSearchInput(text);
  };

  const changePage = (_, page) => {
    const text = searchInput;
    const language = searchFields.language;
    const genres = searchFields.genres;
    !text
      ? dispatch(fetchMovies({ page, language, genres }))
      : dispatch(fetchSearchMovie({ text, page }));
  };

  return (
    <>
      <NavBar>
        <ProfileLink />
        <SearchMovie value={searchInput} onChange={handleChangeSearchInput} />
      </NavBar>
      <Typography
        align="center"
        sx={{
          m: "30px",
          fontFamily: "Mochiy Pop One",
        }}
        variant="h5"
      >
        Movies
      </Typography>
      <Box
        sx={{
          display: { sm: "flex" },
          alignItems: "flex-start",
        }}
      >
        <SortCard />
        <Grid
          container
          spacing={3}
          direction="row"
          justifyContent="center"
          sx={{ pb: "20px" }}
        >
          {isFetching ? (
            <Loader />
          ) : (
            results &&
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
                  isFatching={isFetching}
                />
              )
            )
          )}
          {!page ? (
            <Loader />
          ) : (
            <BasicPagination
              pageAmount={total_pages}
              page={page}
              onChange={changePage}
            />
          )}
        </Grid>
      </Box>
    </>
  );
}

export default Movies;

Movies.propTypes = {
  page: PropTypes.number,
  results: PropTypes.array,
  total_pages: PropTypes.number,
  favoritId: PropTypes.array,
  isFetching: PropTypes.bool,
  searchFields: PropTypes.object,
};
