// src/Button.js
import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-active btn-ghost" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
