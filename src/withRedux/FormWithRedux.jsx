import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";

import { useSelector, useDispatch } from "react-redux";
import { getAllUserAction, editUSerAction, addUserAction } from "./action";

const FormWithRedux = ({ type, data, close, getAllData }) => {
  const [editData, setEditdata] = useState(data);
  const dispatch = useDispatch();

  //on Input feild change
  const handeleOnchange = (e) => {
    const { name, value } = e.target;
    setEditdata((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  //Add User
  const handleAddUser = () => (dispatch(addUserAction(editData)), close(false));

  //edit user
  const handleEdit = () => (dispatch(editUSerAction(editData)), close(false));

  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {type === "addUser" ? "Add User" : "Edit"}
      </h1>
      <TextField
        label={"Name"}
        sx={{ margin: "10px" }}
        id="name"
        name="name"
        value={editData.name}
        onChange={handeleOnchange}
      />
      <TextField
        label={"Email"}
        sx={{ margin: "10px" }}
        id="email"
        name="email"
        value={editData.email}
        onChange={handeleOnchange}
      />
      {type === "addUser" ? (
        <Button onClick={handleAddUser}>Add User</Button>
      ) : (
        <Button onClick={handleEdit}>Update</Button>
      )}
    </>
  );
};

export default FormWithRedux;
