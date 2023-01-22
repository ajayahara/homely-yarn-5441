import Button from "./Button";
const Quantity = ({ qty, handleadd,handlereduce, id }) => {
  return (
    <div style={{ display: "flex",gap:5,marginLeft:"100px",color:"green",cursor:"pointer"}}>
      <Button disabled={qty==1} onClick={() => handlereduce()}>-</Button>
      <div style={{marginTop:"2px",fontSize:"25px" }}>{qty}</div>
      <Button onClick={() => handleadd()}>+</Button>
    </div>
  );
};
export default Quantity;
