import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { generateSeccionId } from "../../../apis/auth";
import { fetchUser } from "../../../store/redusers/userSlice";
import { setLogIn } from "../../../store/redusers";

function Session() {
  const dispatch = useDispatch();
  const history = useHistory();
  useEffect(() => {
    dispatch(setLogIn());
    const token = localStorage.getItem("request_token");
    generateSeccionId(token).then((response) => {
      dispatch(fetchUser(response));
    });

    history.push("/movies");
    return () => localStorage.removeItem("request_token");
  }, [history, dispatch]);
  return <div>Welcome to session</div>;
}

export default Session;
