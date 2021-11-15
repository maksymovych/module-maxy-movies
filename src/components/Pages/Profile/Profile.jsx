import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import { Typography } from "@mui/material";
import TableRow from "@mui/material/TableRow";
import NavBar from "../../NavBar/NavBar";
import MyButton from "../../ui/buttons/MyButton/MyButton";
import { getImgPath } from "../../../utils/functions/getImgPath";
import ButtonBack from "../../ui/buttons/ButtonBack/ButtonBack";
import Loader from "../../ui/Loader/Loader";
import { deleteSession } from "../../../store/redusers";

function Profile() {
  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  if (!user.avatar.tmdb.avatar_path) {
    return <Loader />;
  }
  const imgP = getImgPath(user.avatar.tmdb.avatar_path);
  const { id, name, username } = user;

  const handleLogOut = () => {
    const session_id = localStorage.getItem("session_id");
    dispatch(deleteSession(session_id));
    localStorage.clear();
  };

  return (
    <>
      <NavBar />
      <ButtonBack isBack={true} />
      <Typography
        align="center"
        sx={{
          mb: "30px",
          fontFamily: "Mochiy Pop One",
        }}
        variant="h5"
      >
        Profile
      </Typography>
      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
        <CardMedia component="img" image={imgP} alt="green iguana" />
        <CardContent>
          <Table sx={{ width: "100%" }} aria-label="caption table">
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Name:
                </TableCell>
                <TableCell align="left">{name}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  NickName:
                </TableCell>
                <TableCell align="left">{username}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  User ID:
                </TableCell>
                <TableCell align="left">{id}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
        <CardActions sx={{ px: "30%" }}>
          <MyButton sx={{ mb: "15px" }} onClick={handleLogOut}>
            Log out
          </MyButton>
        </CardActions>
      </Card>
    </>
  );
}

export default Profile;

Profile.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  username: PropTypes.string,
};