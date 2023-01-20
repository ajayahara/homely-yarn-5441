import Price from "./Price";
import Quantity from "./Quantity";
const Item = ({ label, price, qyt, hendalqty, id,image }) => {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: 10,
        height:"110px",
        marginTop: "2px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
      }}
    >
      <img src={image} alt="" width={140} height={120} />
      <Price label={label} price={price} />
      <Quantity id={id} qty={qyt} changecount={hendalqty} />
      <button style={{height:"28px",marginLeft:"60px",backgroundColor:"grey",border:"none",width:"13%",fontSize:"15px"}}>REMOVE</button>
    </div>
  );
};
export default Item;
