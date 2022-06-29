import axios from "axios";
import { GET_ALL_USER, ADD_USER, EDIT_USER, DELETE_USER } from "./constant";

const getAllUserAction = () => async (dispatch) => {
  const { data } = await axios.get("/students");
  dispatch({
    type: GET_ALL_USER,
    payload: data,
  });
};

const editUSerAction = (data) => async (dispatch, getState) => {
  await axios.put(`http://localhost:8000/students/${data.id}`, data);
  dispatch({
    type: EDIT_USER,
    payload: data,
  });
};

const deleteUserAction = (id) => async (dispatch, getState) => {
  await axios.delete(`/students/${id}`);

  dispatch({
    type: DELETE_USER,
    payload: getState().allUSers.allUser.filter((data) => {
      return id !== data.id;
    }),
  });
};

const addUserAction = (userData) => async (dispatch) => {
  await axios.post("/students/", userData);
  const { data } = await axios.get("/students/");
  dispatch({
    type: ADD_USER,
    payload: data,
  });
};

export { getAllUserAction, editUSerAction, deleteUserAction, addUserAction };
