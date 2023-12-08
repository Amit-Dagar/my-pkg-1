// src/Button.js
import React from "react";

const Button = ({ text, onClick, className }) => {
  return (
    <button className="btn btn-ghost" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
