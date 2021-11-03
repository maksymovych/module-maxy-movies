import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React from "react";
function RadioButtons({ mainLabel, inputsArray }) {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">{mainLabel}</FormLabel>
      <RadioGroup row name="row-radio-buttons-group">
        {inputsArray.map((item, i) => (
          <FormControlLabel
            key={i}
            value={item.value}
            label={item.label}
            control={<Radio />}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtons;
