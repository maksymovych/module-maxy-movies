import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import PropTypes from "prop-types";
import { getImgPath } from "../../../utils/functions/getImgPath";
import Raiting from "../../ui/Raiting/Raiting";
import {
  addCurrentMovie,
  fetchFavorits,
  fetchMarkAsFavorite,
} from "../../../store/redusers";
import FavoriteIco from "../../ui/FavoritIco/FavoriteIco";
import { isFavorite } from "../../../utils/functions/isFavorit";
import Loader from "../../ui/Loader/Loader";

export default function CardMovie(props) {
  const { poster, raiting, name, id, reliase, favorits } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const pathImg = getImgPath(poster);
  const isFavorit = isFavorite(id, favorits);

  const handleAddToFavoritre = async () => {
    const session_id = localStorage.getItem("session_id");
    const isFav = !isFavorit;
    await dispatch(fetchMarkAsFavorite({ id, isFav, session_id }));
    await dispatch(fetchFavorits({ session_id }));
  };

  const handleOpenDescription = () => {
    dispatch(addCurrentMovie(props));
    history.push(`movie/${id}`);
  };
  if (!poster) return null;
  return (
    <Grid item key={id}>
      <Card sx={{ maxWidth: "250px" }}>
        <CardActionArea>
          <FavoriteIco
            sx={{ position: "absolute", right: "10px", top: "10px" }}
            isFavorite={isFavorit}
            onClick={handleAddToFavoritre}
          />
          {!!pathImg ? (
            <CardMedia
              component="img"
              height="100%"
              width="100%"
              image={pathImg}
              alt="green iguana"
              onClick={handleOpenDescription}
            />
          ) : (
            <Loader />
          )}

          <CardContent>
            <Raiting raiting={raiting} color="secondary" />
            <Typography
              sx={{ pt: "10px" }}
              gutterBottom
              variant="h6"
              component="div"
              noWrap
              onClick={handleOpenDescription}
            >
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {reliase}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}

CardMovie.propTypes = {
  poster: PropTypes.string,
  raiting: PropTypes.number,
  name: PropTypes.string,
  reliase: PropTypes.string,
  id: PropTypes.number,
  favorits: PropTypes.array,
};