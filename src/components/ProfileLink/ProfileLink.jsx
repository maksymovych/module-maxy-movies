import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Avatar } from "@mui/material";
import { getImgPath } from "../../utils/functions/getImgPath";
import Loader from "../ui/Loader/Loader";

function ProfileLink() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user?.avatar?.tmdb?.avatar_path) {
    return <Loader />;
  }
  const imgPath = getImgPath(user.avatar.tmdb.avatar_path);

  return (
    <Link to="/profile" sx={{ float: "right" }}>
      <Avatar
        alt="My Avatar"
        title="Open Profile"
        src={imgPath}
        sx={{ width: 50, height: 50 }}
      />
    </Link>
  );
}

export default ProfileLink;

ProfileLink.propTypes = {
  imgPath: PropTypes.string,
};
