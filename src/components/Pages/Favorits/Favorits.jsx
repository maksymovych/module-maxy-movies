import React from "react";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { Grid, Typography } from "@mui/material";
import { fetchFavorits } from "../../../store/redusers";
import { useStateDispatch } from "../../../utils/hoocks/useStateDispatch";
import NavBar from "../../NavBar/NavBar";
import ProfileLink from "../../ProfileLink/ProfileLink";
import ButtonBack from "../../ui/buttons/ButtonBack/ButtonBack";
import BasicPagination from "../../ui/Pagination/Pagination";
import CardMovie from "../Movies/CardMovie";

function Favorits() {
  const dispatch = useDispatch();
  const [
    {
      favoritId,
      favorits: { results, total_pages, page },
    },
  ] = useStateDispatch("movies");

  const changePageFavorits = (_, value) => {
    const session_id = localStorage.getItem("session_id");
    dispatch(fetchFavorits({ session_id, page: value }));
  };

  return (
    <>
      <NavBar>
        <ProfileLink />
      </NavBar>
      <ButtonBack isBack={true} />
      <Typography
        align="center"
        sx={{
          m: "30px",
          fontFamily: "Mochiy Pop One",
        }}
        variant="h5"
      >
        Your favorite movies
      </Typography>
      <BasicPagination
        pageAmount={total_pages}
        page={page}
        onChange={changePageFavorits}
      />
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ p: "10px" }}
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
          <Typography sx={{ p: "20px", mx: "30px" }} variant="h6">
            ...Sorry you dont have your own list of favorits. But you can change
            it by cklicking on the heart on the movie card:)
          </Typography>
        )}
      </Grid>
    </>
  );
}

export default Favorits;

Favorits.propTypes = {
  favoritId: PropTypes.array,
  results: PropTypes.array,
  total_pages: PropTypes.string,
  page: PropTypes.string,
};
