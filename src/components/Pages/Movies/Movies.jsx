import React from "react";
import { Stack } from "@mui/material";
import NavBar from "../../NavBar/NavBar";
import SearchMovie from "../../ui/SearchMovie/SearchMovie";
import ProfileLink from "../../ProfileLink/ProfileLink";
import BasicPagination from "../../ui/Pagination/Pagination";

function Movies() {
  return (
    <>
      <NavBar>
        <Stack direction="row" spacing={2}>
          <ProfileLink />
          <SearchMovie />
        </Stack>
      </NavBar>
      <BasicPagination pageAmount={3} page={1} changePage={3} />
    </>
  );
}

export default Movies;
