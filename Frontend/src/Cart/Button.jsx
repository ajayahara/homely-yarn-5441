const Button = ({ onClick, children, disabled }) => {
  return (
    <button
       style={{
        //  width:"20px",
        height:"25px",
         padding: "6px",
         border: 0,
         fontSize: "bold",
         backgroundColor: "pink",
         color: "white",
         cursor:"pointer"

        

      }}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;