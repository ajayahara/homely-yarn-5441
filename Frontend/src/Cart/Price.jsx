const Price = ({ label, price }) => {
    return (
      <div
      style={{
        // display: "flex",
  
        gap: "100px",
        // color:"red"
        cursor:"pointer"
      }}
      >
        <div style={{width:"200px",fontSize:"14px",height:"50px" ,color:"black"}}>{label}</div>
        <div style={{color:"black" ,marginLeft:"10px",marginTop:"20px"}}>Price Rs.{price}</div>
      </div>
    );
  };
  export default Price;
  
  