import React from "react";
import "./button.css";

const MyButton = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
