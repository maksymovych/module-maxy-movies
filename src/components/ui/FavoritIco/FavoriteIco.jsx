import React from "react";
import { Avatar } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Box } from "@mui/system";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function FavoriteIco({ isFavorite, ...props }) {
  const notify = () =>
    toast(
      !isFavorite ? "Movie added to favorites!" : "Movie deleted from list!"
    );
  return (
    <Box onClick={notify}>
      <Avatar sx={{ cursor: "pointer" }} {...props}>
        {isFavorite ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
      </Avatar>
      <ToastContainer />
    </Box>
  );
}

export default FavoriteIco;
