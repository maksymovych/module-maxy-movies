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

function Profile() {
  //const { imagePath } = useSelector((state) => state.user);
  const imgP = localStorage.getItem("img");
  const user = localStorage.getItem("user");
 // const sessionId = localStorage.getItem('session_id')
  const { id, name, username } = JSON.parse(user);

  const handleLogOut = () => {
  
    localStorage.clear()
    
  };

  return (
    <>
      <NavBar />
      <Card sx={{ maxWidth: 345, margin: "40px auto" }}>
        <CardMedia
          component="img"
          height="140"
          image={imgP}
          alt="green iguana"
        />
        <CardContent>
          <TableContainer component={Paper}>
            <Table sx={{ width: '100%' }} aria-label="caption table">
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
