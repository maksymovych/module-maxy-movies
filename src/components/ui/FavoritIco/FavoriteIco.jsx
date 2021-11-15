import React from "react";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function FavoriteIco({ isFavorite, ...props }) {
  return (
    <Avatar sx={{ cursor: "pointer" }} {...props}>
      {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
    </Avatar>
  );
}

export default FavoriteIco;
