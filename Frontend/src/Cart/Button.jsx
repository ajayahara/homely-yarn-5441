const Button = ({ onClick, children, disabled }) => {
    return (
      <button
         style={{
          //  width:"20px",
          height:"25px",
           padding: "6px",
           border: 0,
           fontSize: "bold",
           background: "green",
           color: "white"
          

        }}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  export default Button;