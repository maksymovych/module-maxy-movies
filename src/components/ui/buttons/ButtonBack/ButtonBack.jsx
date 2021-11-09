import { Box } from "@mui/system";
import React from "react";
import { useHistory } from "react-router";
import MyButton from "../MyButton/MyButton";

function ButtonBack(props) {
  const history = useHistory();
  const handleBack = () => {
    history.push("/movies");
  };

  return (
    <Box sx={{ width: "100px", ml: "20px" }}>
      <MyButton {...props} size="small" color="secondary" onClick={handleBack}>
        {"< "}Back
      </MyButton>
    </Box>
  );
}

export default ButtonBack;
