const Button = ({ text, onClick }) => {
  return (
    <button className="btn btn-ghost" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
