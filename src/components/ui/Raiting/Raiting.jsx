import React from "react";
import { Avatar, CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";
import PropTypes from "prop-types";

function Raiting({ raiting, ...props }) {
  const rait = Math.round(raiting * 10);
  return (
    <Avatar
      color="primary"
      sx={{
        bgcolor: grey[400],
        position: "absolute",
        display: "inline-flex",
        bottom: "80px",
      }}
      {...props}
    >
      <CircularProgress variant="determinate" value={rait} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {rait}%
        </Typography>
      </Box>
    </Avatar>
  );
}

export default Raiting;

Raiting.propTypes = {
  raiting: PropTypes.number,
};
