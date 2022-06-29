import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { addUserReducer } from "./withRedux/reducer";

const reducer = combineReducers({
    allUSers: addUserReducer
  })

  const store = createStore(
    reducer,
    compose(
      applyMiddleware(thunk),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
  );
  
  export default store;