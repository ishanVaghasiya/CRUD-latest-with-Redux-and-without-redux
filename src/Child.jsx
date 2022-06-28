import React from "react";

const Child = (props) => {
  const data = {
    id: "child1",
    message: "I am come from child",
  };
  return (
    <div>
      {props.getData(data)}
      Child
    </div>
  );
};

export default Child;
