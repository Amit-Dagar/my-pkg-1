// src/Button.js
import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {console.log(text, className)}
      {text}
    </button>
  );
};

export default Button;
