import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

export default function AutocompliteInput({ langusgesList, onChange }) {
  return (
    <Autocomplete
      onChange={(_, value) => onChange(value.iso_639_1)}
      sx={{ m: "10px" }}
      id="languages"
      options={langusgesList}
      autoHighlight
      getOptionLabel={(option) => option.english_name}
      renderOption={(props, option) => (
        <Box
          component="li"
          sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
          {...props}
        >
          {option.english_name} ({option.name})
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          inputProps={{
            ...params.inputProps,
          }}
        />
      )}
    />
  );
}

AutocompliteInput.propTypes = {
  langusgesList: PropTypes.array,
  onChange: PropTypes.func,
};
