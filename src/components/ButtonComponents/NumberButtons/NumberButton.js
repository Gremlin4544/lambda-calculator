import React from "react";
import {numbers} from "../../../data";

const NumberButton = (props) => {
  // console.log(NumberButton);
  return (
    <button className="button-container" onClick={
      () => props.numbers()}>
        {props.buttonValue}
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      }
    </button>
  );
};

export default NumberButton;
