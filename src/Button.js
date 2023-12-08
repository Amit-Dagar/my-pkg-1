const Button = ({ text, onClick }) => {
  return (
    <button
      style={{
        background: "black",
        color: "white",
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
