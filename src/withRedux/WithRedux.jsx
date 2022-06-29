import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import axios from "axios";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { Button, Dialog } from "@mui/material";

import FormWithRedux from "./FormWithRedux";

import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction,  deleteUserAction } from "./action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const HomewithRedux = () => {
  // const [allData, setAllData] = useState([]);
  const [open, setOpen] = useState(false);
  const [type, setType] = useState("");
  const [editData, setEditData] = useState({
    name:"",
    email:""
  });

  const dispatch = useDispatch();

  //Get all users
  useEffect(() => {
    dispatch(getAllUserAction());
  }, []);

  const { allUser } = useSelector((state) => state.allUSers);
  console.log(allUser);
  

  //Create user
  const handleAddUser = () => {
    setType("addUser");
    setOpen(true);
    setEditData({});
  };

  //edit User
  const handleEdit = (data) => {
    setType("edit");
    setOpen(true);
    setEditData(data);
  };

  //Delete user
  const handelDelete = async (id) => {
    dispatch(deleteUserAction(id))
    // await axios.delete(`http://localhost:8000/students/${id}`);
    // getAllData();
  };

  return (
    <>
      <Button
        variant="contained"
        sx={{ margin: "10px 0" }}
        onClick={handleAddUser}
      >
        Add user
      </Button>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Email</StyledTableCell>
              <StyledTableCell>Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {allUser &&
              allUser.map((data, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell sx={{ width: "20px" }}>
                    {data.id}
                  </StyledTableCell>
                  <StyledTableCell>{data.name}</StyledTableCell>
                  <StyledTableCell>{data.email}</StyledTableCell>
                  <StyledTableCell>
                    <IconButton
                      aria-label="edit"
                      color="success"
                      onClick={() => handleEdit(data)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      aria-label="delete"
                      color="error"
                      onClick={() => handelDelete(data.id)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Dialog onClose={() => setOpen(false)} open={open}>
        <FormWithRedux
          type={type}
          data={editData}
          close={(bol) => setOpen(bol)}
        />
      </Dialog>
    </>
  );
};

export default HomewithRedux;
