const Button = ({ onClick, children, disabled }) => {
    return (
      <button
         style={{
           width:"35px",
          height:"35px",

           padding: "4px 4px",
           border: 0,
           fontSize: "22px",
           backgroundColor: "rgb(247,102,174)",
           color: "white",
           cursor:"pointer",
           borderRadius:"5px"
  
          
  
        }}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  };
  export default Button;