import React, { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Typography,
} from "@mui/material";
import { passwordFields } from "../../../../data/index";
import { passwordValidation } from "../../../../utils/validation/password";

function PasswordInputs() {
  const [values, setValues] = useState({
    password: "",
    comfirmPassword: "",
    showPassword: false,
    isError: false,
  });
  const errorMessages = {
    unEquale: "Passwords are unequale",
    isMatch:
      "Password lebgth min 6 max 20 characters, should contain at least one numeric digit, one uppercase and one lowercase letter",
  };
  const pass = values.password;
  const cPass = values.comfirmPassword;

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
    if (!pass.match(passwordValidation)) {
      setValues({
        ...values,
        isError: true,
        errPassword: errorMessages.isMatch,
      });
      return;
    }
    if (pass !== cPass) {
      setValues({
        ...values,
        isError: true,
        errPassword: errorMessages.unEquale,
      });
      return;
    } else {
      setValues({
        ...values,
        isError: false,
        errPassword: "",
      });
    }
  };

  return (
    <>
      {passwordFields.map(({ name, label }, i) => (
        <FormControl
          fullWidth
          sx={{ my: "15px" }}
          variant="outlined"
          key={i + 20}
        >
          <InputLabel htmlFor={name}>{label}</InputLabel>
          <OutlinedInput
            onBlur={handleOnBlur}
            required
            id={name}
            type={values.showPassword ? "text" : "password"}
            value={values[name]}
            onChange={handleChange(`${name}`)}
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
          {i === 0 && values.isError && (
            <Typography>{values.errPassword}</Typography>
          )}
        </FormControl>
      ))}
    </>
  );
}

export default PasswordInputs;
