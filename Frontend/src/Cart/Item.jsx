import Price from "./Price";
import Quantity from "./Quantity";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Item = ({ label, price, qty, hendalqty, id,image }) => {
  const [qtyy,setQty]=useState(qty)
  const handleadd=()=>{
    setQty(qtyy+1)
  }
  const handlereduce=()=>{
    setQty(qtyy-1)
  }

  const handleDelete=(id)=>
  {
     console.log(id)
     axios.delete(`https://cyan-splendid-kingfisher.cyclic.app/cart/delete/${id}`,{
        // method:"DELETE",
        headers:{
            Authorization:localStorage.getItem("token")
        }
    }).then((res)=>{
      console.log(res)
      window.location.reload()
    }).catch((err)=>{
      console.log(err)
    })
   
  }


  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        padding: 10,
        height:"110px",
        marginTop: "15px",
        boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px",
        backgroundColor:"white"
      }}
    >
      <img src={image} alt="" width={140} height={120} />
      <Price label={label} price={price} />
      <Quantity id={id} qty={qtyy} handleadd={handleadd} handlereduce={handlereduce} />
      <button style={{height:"28px",marginLeft:"60px",backgroundColor:"grey",border:"none",width:"13%",
      fontSize:"15px"}} 
      onClick={()=>handleDelete(id)}>REMOVE</button>
    </div>
  );
};
export default Item;
