import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function DateInput() {
  const [value, setValue] = useState(new Date("2000-01-01T21:11:54"));

  const changeDate = (newValue) => {
    setValue(newValue);
  };
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3} sx={{ my: "15px" }}>
        <DesktopDatePicker
          label="Date of birth"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={changeDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
}

export default DateInput;
