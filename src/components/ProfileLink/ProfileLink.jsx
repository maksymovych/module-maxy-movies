import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { API_IMAGES } from "../../apis/auth";
import { addUserImgPath } from "../../store/redusers/userSlice";

function ProfileLink() {
  //const data = useSelector((state) => state.user);
  // const dispatch = useDispatch();
  // const data = localStorage.getItem("user");
  // const path = JSON.parse(data).avatar.tmdb.avatar_path;
  // const imgPath = API_IMAGES + path;
  // useEffect(() => {
  //   dispatch(addUserImgPath(path));
  // });
  // localStorage.setItem("img", imgPath);
  return (
    <Link to="/profile" sx={{ float: "right" }}>
      <Avatar
        alt="My Avatar"
        title="Open Profile"
        src=""
        sx={{ width: 50, height: 50 }}
      />
    </Link>
  );
}

export default ProfileLink;
