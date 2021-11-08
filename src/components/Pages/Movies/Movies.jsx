import React from "react";
import { Grid, Stack } from "@mui/material";
import NavBar from "../../NavBar/NavBar";
import SearchMovie from "../../ui/SearchMovie/SearchMovie";
import ProfileLink from "../../ProfileLink/ProfileLink";
import BasicPagination from "../../ui/Pagination/Pagination";
import { useStateDispatch } from "../../../utils/hoocks/useStateDispatch";
import { changeSearchField, fetchMovies } from "../../../store/redusers";
import Loader from "../../ui/Loader/Loader";
import CardMovie from "./CardMovie";

function Movies() {
  const [{ isFatching, movies, favorits }, dispatch] =
    useStateDispatch("movies");
  const { page, results, total_pages } = movies;

  if (!movies?.results?.length) {
    dispatch(fetchMovies());
  }

  const handleChangeSearchInput = (e) => {
    dispatch(changeSearchField(e.target.value));
  };

  if (isFatching) {
    return <Loader />;
  }
  const changePage = (e) => {
    console.log(e, "change");
  };

  return (
    <>
      <NavBar>
        <Stack direction="row" spacing={1}>
          <ProfileLink />
          <SearchMovie onChange={handleChangeSearchInput} />
        </Stack>
      </NavBar>
      <BasicPagination
        pageAmount={total_pages}
        page={page}
        changePage={changePage}
      />
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ px: "20px" }}
      >
        {!!results &&
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
                favorits={favorits}
              />
            )
          )}
      </Grid>
    </>
  );
}

export default Movies;
