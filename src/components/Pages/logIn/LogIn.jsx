import React from "react";
import { Box } from "@mui/system";
import Card from "@mui/material/Card";
import { CardMedia, Typography } from "@mui/material";
import RegistrTabPanel from "../../RegistrTabPanel/RegistrTabPanel";

function LogIn() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box sx={{ flexGrow: 1, display: { xs: "none", lg: "block" } }}>
        <CardMedia
          component="img"
          alt="movie_poster"
          image="https://fantlab.ru/blogfiles/b74269/img/1?r=1631814565"
        />
      </Box>
      <Box>
        <Typography
          align="center"
          sx={{ m: "30px" }}
          gutterBottom
          variant="h4"
          component="h1"
        >
          Welcome to Module Maxy Movies
        </Typography>
        <Card sx={{ maxWidth: "500px", minWidth: "400px", m: "auto" }}>
          <RegistrTabPanel />
        </Card>
      </Box>
    </Box>
  );
}

export default LogIn;
