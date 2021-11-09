import { Grid } from "@mui/material";
import React from "react";
import { useStateDispatch } from "../../../utils/hoocks/useStateDispatch";
import NavBar from "../../NavBar/NavBar";
import ProfileLink from "../../ProfileLink/ProfileLink";
import ButtonBack from "../../ui/buttons/ButtonBack/ButtonBack";
import CardMovie from "../Movies/CardMovie";

function Favorits() {
  const [{ favoritId, favorits }] = useStateDispatch("movies");
  return (
    <>
      <NavBar>
        <ProfileLink />
      </NavBar>
      <ButtonBack />
      <Grid
        container
        spacing={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        sx={{ p: "10px" }}
      >
        {favorits.results &&
          favorits.results.map(
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
    </>
  );
}

export default Favorits;
