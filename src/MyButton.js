import React from "react";

const MyButton = ({ text, onClick }) => {
  return (
    <button class="btn btn-ghost-active" onClick={onClick}>
      {text}
    </button>
  );
};

export default MyButton;
