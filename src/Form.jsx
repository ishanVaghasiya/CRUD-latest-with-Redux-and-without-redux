import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import axios from "axios";
const Form = ({ type, data, close, getAllData }) => {
  const [editData, setEditdata] = useState(data);

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

  //Edit User
  const handleAddUser = async () => (
    await axios.post("/students", editData),
    close(false),
    getAllData()
  );

  //Add user
  const handleEdit = async () => (
    await axios.put(`/students/${editData.id}`, editData),
    close(false),
    getAllData()
  );

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

export default Form;
