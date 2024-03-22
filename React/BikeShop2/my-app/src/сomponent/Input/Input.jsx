import React from "react";
import "./Imput.css";

const Input = (props) => {
  return (
    <>
      <input
        className="search_Input"
        type="text"
        placeholder="Search..."
        {...props}
      ></input>
    </>
  );
};

export default Input;
