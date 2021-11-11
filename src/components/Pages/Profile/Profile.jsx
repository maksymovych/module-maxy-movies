import React from "react";
//import { useSelector } from "react-redux";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import NavBar from "../../NavBar/NavBar";
import MyButton from "../../ui/buttons/MyButton/MyButton";
import { getImgPath } from "../../../utils/functions/getImgPath";
import { useDispatch, useSelector } from "react-redux";
import { deliteSession } from "../../../store/redusers";
import ButtonBack from "../../ui/buttons/ButtonBack/ButtonBack";

function Profile() {
  const { data } = useSelector((state) => state.user);
  const imgP = getImgPath(data.avatar.tmdb.avatar_path);
  const { id, name, username } = data;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const session_id = localStorage.getItem("session_id");
    dispatch(deliteSession(session_id));
    localStorage.clear();
  };

  return (
    <>
      <NavBar />
      <ButtonBack isBack={true} />
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
