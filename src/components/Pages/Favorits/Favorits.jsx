import { Typography } from "@mui/material";
import React from "react";
import NavBar from "../../NavBar/NavBar";
import ProfileLink from "../../ProfileLink/ProfileLink";

function Favorits() {
  return (
    <>
      <NavBar>
        <ProfileLink />
      </NavBar>
      <Typography align="center">List of favorit movies</Typography>
    </>
  );
}

export default Favorits;
