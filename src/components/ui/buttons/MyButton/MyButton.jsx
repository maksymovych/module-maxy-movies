import { Button } from "@mui/material";
import React from "react";
import PropTypes from "prop-types";

function MyButton({ children, ...props }) {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      sx={{ mt: "10px" }}
      fullWidth
      {...props}
    >
      {children}
    </Button>
  );
}

export default MyButton;

MyButton.propTypes = {
  children: PropTypes.any,
  props: PropTypes.any,
};
