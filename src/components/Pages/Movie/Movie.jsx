import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import React from "react";
import NavBar from "../../NavBar/NavBar";
import { getImgPath } from "../../../utils/functions/getImgPath";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/system";
import Raiting from "../../ui/Raiting/Raiting";
import FavoriteIco from "../../ui/FavoritIco/FavoriteIco";
import { isFavorite } from "../../../utils/functions/isFavorit";
import ButtonBack from "../../ui/buttons/ButtonBack/ButtonBack";
import { fetchFavorits, fetchMarkAsFavorite } from "../../../store/redusers";

function Movie() {
  const { currentMovie, favoritId } = useSelector((state) => state.movies);
  const { path, poster, raiting, title, name, reliase, id } = currentMovie;
  const dispatch = useDispatch();

  const isFavorit = isFavorite(id, favoritId);
  const fullImgPath = getImgPath(path);
  const posterPath = getImgPath(poster);

  const handleAddToFavorit = async () => {
    const session_id = localStorage.getItem("session_id");
    const isFav = !isFavorit;
    await dispatch(fetchMarkAsFavorite({ id, isFav, session_id }));
    await dispatch(fetchFavorits({ session_id }));
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
          <ButtonBack isBack={true} sx={{ my: "10px" }} />
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
                  isFavorite={isFavorit}
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
