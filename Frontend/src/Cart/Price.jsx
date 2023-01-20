const Price = ({ label, price }) => {
  return (
    <div
    style={{
      // display: "flex",

      gap: "100px",
      // color:"red"
    }}
    >
      <div style={{width:"200px",fontSize:"14px",height:"50px" ,color:"green"}}>{label}</div>
      <div style={{color:"green" ,marginLeft:"10px",marginTop:"20px"}}>Price Rs.{price}</div>
    </div>
  );
};
export default Price;
