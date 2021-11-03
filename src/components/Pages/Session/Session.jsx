import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { generateSeccionAndUser } from "../../../apis/auth";

function Session() {
  const history = useHistory();
  useEffect(() => {
    const token = localStorage.getItem("request_token");

    generateSeccionAndUser(token);

    history.push("/movies");
    return () => localStorage.removeItem("request_token");
  }, [history]);
  return <div>Welcome to session</div>;
}

export default Session;
