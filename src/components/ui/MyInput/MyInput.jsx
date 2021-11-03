import { TextField } from "@mui/material";
import React, { forwardRef } from "react";

const MyInput = forwardRef((props, ref) => {
  return (
    <TextField
      fullWidth
      variant="outlined"
      margin="normal"
      inputRef={ref}
      {...props}
    />
  );
});

export default MyInput;
