import React, { useState } from "react";
import { Grid, Skeleton, Stack } from "@mui/material";
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

function Movies() {
  const [{ movies, favoritId, isFetching }, dispatch] =
    useStateDispatch("movies");
  const { page, results, total_pages } = movies;
  const [search, setSearch] = useState("");

  if (!favoritId?.length) {
    const sessionId = localStorage.getItem("session_id");
    dispatch(fetchFavorits(sessionId));
  }

  if (!results?.length && !isFetching) {
    dispatch(fetchMovies());
  }

  const handleChangeSearchInput = (e) => {
    const text = e.target.value;
    setSearch(text);
    if (text.length < 2) return;
    dispatch(fetchSearchMovie({ text }));
  };

  const changePage = (_, page) => {
    const text = search;
    !!search
      ? dispatch(fetchSearchMovie({ text, page }))
      : dispatch(fetchMovies(page));
  };

  return (
    <>
      <NavBar>
        <Stack direction="row" spacing={1}>
          <ProfileLink />
          <SearchMovie value={search} onChange={handleChangeSearchInput} />
        </Stack>
      </NavBar>
      {isFetching ? (
        <Loader />
      ) : (
        <BasicPagination
          pageAmount={total_pages}
          page={page}
          onChange={changePage}
        />
      )}

      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ px: "20px" }}
      >
        {results ? (
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
          )
        ) : (
          <Skeleton
            variant="rectangular"
            sx={{ mt: "20px" }}
            width={250}
            height={470}
          />
        )}
      </Grid>
    </>
  );
}

export default Movies;
