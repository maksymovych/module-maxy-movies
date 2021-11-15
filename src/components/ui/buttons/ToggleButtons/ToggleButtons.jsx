import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
  ToggleButton,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    margin: theme.spacing(0.5),
    border: 0,
    "&.Mui-disabled": {
      border: 0,
    },
    "&:not(:first-of-type)": {
      borderRadius: theme.shape.borderRadius,
    },
    "&:first-of-type": {
      borderRadius: theme.shape.borderRadius,
    },
  },
}));

export default function ToggleButtons({ genresList, genres, onGenresChange }) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary="Genre" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <StyledToggleButtonGroup
            size="small"
            value={genres}
            onChange={onGenresChange}
            aria-label="text formatting"
            sx={{ display: "flex", flexWrap: "wrap" }}
          >
            {genresList.map(({ name, id }) => (
              <ToggleButton
                key={id}
                color="secondary"
                value={id}
                aria-label={name}
              >
                {name}
              </ToggleButton>
            ))}
          </StyledToggleButtonGroup>
        </List>
      </Collapse>
    </>
  );
}

ToggleButton.propTypes = {
  genresList: PropTypes.array,
  genres: PropTypes.string,
  onGenresChange: PropTypes.func,
};
