import React from "react";
import {display} from "../../App.css";

const Display = props => {
  return <div className="display">
  {props.value}
  </div>;
};

export default Display;
