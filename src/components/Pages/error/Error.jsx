import React from "react";
import { useHistory } from "react-router";
import MyButton from "../../ui/buttons/MyButton/MyButton";
import MyModal from "../../ui/MyModal/MyModal";

function Error() {
  const history = useHistory();
  const handleGoToLogin = () => {
    history.push("/movies");
  };
  return (
    <MyModal label="Error mesage" body="404 Page not found!">
      <MyButton color="error" onClick={handleGoToLogin}>
        Go To Movies
      </MyButton>
    </MyModal>
  );
}

export default Error;
