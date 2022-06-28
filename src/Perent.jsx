import React, { useState } from "react";
import Child from "./Child";

const Perent = () => {
  const dataFromChild = (data) => {
    console.log("diaplay from parent",data)
  };
  return (
    <div>
      <p>I am Parent</p>
      <span>-----------------</span>
      <Child getData={dataFromChild} />
    </div>
  );
};

export default Perent;



