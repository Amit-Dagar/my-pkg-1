import React from "react";

const Button = ({ text, onClick }) => {
  return (
    <button class="btn btn-ghost-active" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
