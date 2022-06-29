import { GET_ALL_USER, ADD_USER, EDIT_USER, DELETE_USER } from "./constant";

const addUserReducer = (state = { allUser: [] }, action) => {
  switch (action.type) {
    case GET_ALL_USER:
      return {
        ...state,
        allUser: action.payload,
      };
    case ADD_USER: {
      return {
        ...state,
        allUser: action.payload,
      };
    }
    case EDIT_USER:
      const userData = action.payload;
      return {
        ...state,
        allUser: [
          ...state.allUser.filter((data) => data.id !== userData.id),
          userData,
        ],
      };
    case DELETE_USER: {
      return {
        ...state,
        allUser: action.payload,
      };
    }
    default:
      return { ...state };
  }
};

export { addUserReducer };
