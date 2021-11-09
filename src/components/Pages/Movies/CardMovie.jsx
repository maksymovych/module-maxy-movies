import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import { getImgPath } from "../../../utils/functions/getImgPath";
import { useHistory } from "react-router";
import Raiting from "../../ui/Raiting/Raiting";
import {
  addCurrentMovie,
  fetchFavorits,
  fetchMarkAsFavorite,
} from "../../../store/redusers";
import { useDispatch } from "react-redux";
import FavoriteIco from "../../ui/FavoritIco/FavoriteIco";
import { isFavorite } from "../../../utils/functions/isFavorit";

export default function CardMovie(props) {
  const { poster, raiting, name, id, reliase, favorits } = props;
  const dispatch = useDispatch();
  const history = useHistory();
  const pathImg = getImgPath(poster);
  const isFavorit = isFavorite(id, favorits);
  if (!poster) {
    return null;
  }
  const handleAddToFavorit = async () => {
    const sessionId = localStorage.getItem("session_id");
    const isFav = !isFavorit;
    await dispatch(fetchMarkAsFavorite({ id, isFav, sessionId }));
    await dispatch(fetchFavorits(sessionId));
  };

  const handleOpenDescription = () => {
    dispatch(addCurrentMovie(props));
    history.push(`movie/${id}`);
  };

  return (
    <Grid item key={id}>
      <Card sx={{ maxWidth: "250px" }}>
        <CardActionArea>
          <FavoriteIco
            sx={{ position: "absolute", right: "10px", top: "10px" }}
            isFavorite={isFavorit}
            onClick={handleAddToFavorit}
          />

          <CardMedia
            component="img"
            height="100%"
            width="100%"
            image={pathImg}
            alt="green iguana"
            onClick={handleOpenDescription}
          />

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
