import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "../../NavBar/NavBar";
import ButtonBack from "../../ui/MyButton/ButtonBack";
import { getImgPath } from "../../../utils/functions/getImgPath";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Raiting from "../../ui/Raiting/Raiting";
import FavoriteIco from "../../ui/FavoritIco/FavoriteIco";
import { isFavorite } from "../../../utils/functions/isFavorit";
import { addToFavorits, removeFromFavorits } from "../../../store/redusers";

function Movie() {
  const { currentMovie, favorits } = useSelector((state) => state.movies);
  const dispatch = useDispatch();
  const { path, poster, raiting, title, name, reliase, id } = currentMovie;
  const isFavoriteMovie = isFavorite(id, favorits);
  const fullImgPath = getImgPath(path);
  const posterPath = getImgPath(poster);
  const handleAddToFavorit = () => {
    isFavoriteMovie
      ? dispatch(removeFromFavorits(id))
      : dispatch(addToFavorits(id));
  };

  return (
    <>
      <NavBar />
      <Box sx={{ position: "relative" }}>
        <CardMedia
          width="100%"
          component="img"
          image={fullImgPath}
          alt={reliase}
          sx={{ opacity: [0.5, 0.6, 0.4] }}
        />
        <Box sx={{ position: "absolute", top: 0 }}>
          <ButtonBack sx={{ my: "10px" }} />
          <Box
            sx={{
              display: { xs: "block", md: "flex" },
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: "250px", mx: "20px" }}>
              <CardMedia
                width="300"
                component="img"
                image={posterPath}
                alt={name}
              />
            </Card>

            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {name}
              </Typography>
              <Stack direction="row" spacing={2}>
                <Raiting raiting={raiting} sx={{ top: "0px" }} />
                <FavoriteIco
                  isFavorite={isFavoriteMovie}
                  onClick={handleAddToFavorit}
                />
              </Stack>
              <Typography variant="h6" color="text.secondary">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {reliase}
              </Typography>
            </CardContent>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Movie;
