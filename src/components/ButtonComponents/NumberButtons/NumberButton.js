import React from "react";

const NumberButton = (props) => {
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}

      <button className="button"onClick={
        () => props.numbers()}>add 1</button>
      }
    </>
  );
};

export default NumberButton;
