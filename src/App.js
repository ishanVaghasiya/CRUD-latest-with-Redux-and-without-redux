import { borderRadius } from "@mui/system";
import React from "react";
import Home from "./Home";
import HomewithRedux from "./withRedux/WithRedux";
const myStyle = {
  width:"1000px",
  margin:"auto",
  padding:"10px",
  borderRadius:"20px",
  backgroundColor:"whitesmoke"
}

const App = () => {
  return (
    <>
      <div style={myStyle}>
        {/* <Home /> */}

        {/* Blow componet is same as above componet but with use of REDUX */}
        <HomewithRedux /> 
      </div>
    </>
  );
};

export default App;
