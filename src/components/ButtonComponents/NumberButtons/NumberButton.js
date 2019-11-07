import React from "react";
import "../../../../src/App.css";
import {numbers} from "../../../data";

const NumberButton = props => {
  // console.log(NumberButton);
  return (
    <button className="number-button" onClick={
      () => props.setValue(props.integer)}>
        {props.integer}
      {/* Display a button element rendering the data being passed down from the parent container on props */}

    </button>
  );
};

export default NumberButton;
