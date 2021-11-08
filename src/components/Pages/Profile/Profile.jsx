import React from "react";
//import { useSelector } from "react-redux";
import CardActions from "@mui/material/CardActions";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import NavBar from "../../NavBar/NavBar";
import MyButton from "../../ui/MyButton/MyButton";
import { getImgPath } from "../../../utils/functions/getImgPath";
import { useDispatch, useSelector } from "react-redux";
import ButtonBack from "../../ui/MyButton/ButtonBack";
import { deliteSession } from "../../../store/redusers";

function Profile() {
  const { data } = useSelector((state) => state.user);
  const imgP = getImgPath(data.avatar.tmdb.avatar_path);
  const { id, name, username } = data;
  const dispatch = useDispatch();

  const handleLogOut = () => {
    const sessionId = localStorage.getItem("session_id");
    dispatch(deliteSession(sessionId));
    localStorage.clear();
  };

  return (
    <>
      <NavBar />
      <ButtonBack />
      <Card sx={{ maxWidth: 345, margin: "20px auto" }}>
        <CardMedia component="img" image={imgP} alt="green iguana" />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ width: "100%" }} aria-label="caption table">
              <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Name
                  </TableCell>
                  <TableCell align="right">{name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    NickName
                  </TableCell>
                  <TableCell align="right">{username}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell component="th" scope="row">
                    ID
                  </TableCell>
                  <TableCell align="right">{id}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </CardContent>
        <CardActions sx={{ px: "30%" }}>
          <MyButton onClick={handleLogOut}>Log out</MyButton>
        </CardActions>
      </Card>
    </>
  );
}

export default Profile;
