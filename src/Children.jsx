import React from "react";

const GetDataOfComponent = ({ children }) => {
  return (
    <>
      <div> {children}</div>
    </>
  );
};

const Children = () => {
  return (
    <>
      <div>------</div>
      <GetDataOfComponent>
        <h3>This data directly use</h3>
      </GetDataOfComponent>
    </>
  );
};

export default Children;
