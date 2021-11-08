import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getImgPath } from "../../utils/functions/getImgPath";
import Loader from "../ui/Loader/Loader";

function ProfileLink() {
  const { data, loading } = useSelector((state) => state.user);
  if (loading) {
    return <Loader />;
  }
  const imgPath = getImgPath(data.avatar.tmdb.avatar_path);

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
