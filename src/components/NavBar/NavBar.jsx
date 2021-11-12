import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MyFavoriteIcon from "../ui/MyFavoriteIcon/MyFavoriteIcon";
import ThemToggle from "../ui/ThemToggle/ThemToggle";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function NavBar({ children }) {
  const history = useHistory();
  const {
    favorits: { total_results },
  } = useSelector((state) => state.movies);
  const handleOpenFavorites = () => {
    history.push("/favorits");
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <MyFavoriteIcon
            onClick={handleOpenFavorites}
            amount={total_results}
          />
          <ThemToggle />
          <Link to="/movies">
            <Typography
              variant="h6"
              noWrap
              sx={{
                flexGrow: 1,
                px: "15px",
              }}
            >
              Movies
            </Typography>
          </Link>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              px: "15px",
              display: { sm: "block", xs: "none" },
            }}
          >
            Module Maxy Movie
          </Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              px: "15px",
              display: { xs: "block", sm: "none" },
            }}
          >
            M M M
          </Typography>
          {children}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
