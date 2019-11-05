import React from "react";
import "../../../../src/App.css";


const OperatorButton = props => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.operator.value}</button>
    </>
  );
};

export default OperatorButton;


