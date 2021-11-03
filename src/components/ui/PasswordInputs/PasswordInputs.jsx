import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { passwordFields } from "../../../data/index";

function PasswordInputs() {
  const [values, setValues] = useState({
    password: "",
    comfirmPassword: "",
    showPassword: false,
    isError: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleOnBlur = () => {
    const pass = values.password;
    const cPass = values.comfirmPassword;
    if (pass.length < 4 || pass !== cPass) {
      setValues({
        ...values,
        isError: true,
      });
    } else {
      setValues({
        ...values,
        isError: false,
      });
    }
  };

  return (
    <>
      {passwordFields.map((item, i) => (
        <FormControl
          fullWidth
          sx={{ my: "15px" }}
          variant="outlined"
          key={i + 20}
        >
          <InputLabel htmlFor={item.name}>{item.label}</InputLabel>
          <OutlinedInput
            onBlur={handleOnBlur}
            required
            id={item.name}
            type={values.showPassword ? "text" : "password"}
            value={values[item.name]}
            onChange={handleChange(`${item.name}`)}
            error={values.isError}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      ))}
    </>
  );
}

export default PasswordInputs;
