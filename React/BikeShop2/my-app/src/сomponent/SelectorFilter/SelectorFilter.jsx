import React from "react";
import "./SelectorFilter.css";

const Selector = ({ onChange, value, options }) => {
  return (
    <select
      className="select"
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default Selector;
