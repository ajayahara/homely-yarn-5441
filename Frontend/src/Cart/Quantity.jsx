import Button from "./Button";
const Quantity = ({ qty, changecount, id }) => {
  return (
    <div style={{ display: "flex",gap:5,marginLeft:"100px",color:"green"}}>
      <Button onClick={() => changecount(id, -1)}>-</Button>
      <div style={{marginTop:"2px"}}>{qty}</div>
      <Button onClick={() => changecount(id, +1)}>+</Button>
    </div>
  );
};
export default Quantity;
