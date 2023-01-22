import { useState,useEffect } from "react";
import Item from "./Item";
import Total from "./Total";
import { Flex } from "@chakra-ui/react";

import axios from "axios"

const Initialdata = [
  {
    id: 1,
    name: "Indo Era Solid Wine Straight Kurta Palazzo With D...By INDO ERA DESIGNS",
    image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/186b702c5f004a0aae3eae2400c46a1e_9366/3_STRIPES_TEE_Black_HA7013_21_model.jpg",
    price: 30,
    qyt: 1
  },
  {
    id: 2,
    name: "Indo Era Solid Wine Straight Kurta Palazzo With D...By INDO ERA DESIGNS",
    image:"https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/186b702c5f004a0aae3eae2400c46a1e_9366/3_STRIPES_TEE_Black_HA7013_21_model.jpg",
    price: 30,
    qyt: 1
  },
 
];
const MainPage = () => {
  const [data, setData] = useState(Initialdata);

  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   let  getCartData=async()=>{
  //     let res=await axios.get("https://cyan-splendid-kingfisher.cyclic.app/cart",{
  //           headers:{
  //             "Authorization":localStorage.getItem("token")
  //         }
  //     });
  //     // console.log(res)
  //     setData(res.data);
  //   }
  //   getCartData()
  // },[])
  const totalsum = (sum) => {
    return sum.reduce((acc, c) => acc + c.qyt * c.price, 0);
  };

  const hendalqty = (id, amount) => {
    let newdata = data.map((item) =>
      item.id === id ? { ...item, qyt: item.qyt + amount } : item
    );
    setData(newdata);

    // let data=await axios.get(`https://cyan-splendid-kingfisher.cyclic.app/cart/${id}`);
    
    // await axios.patch(`https://cyan-splendid-kingfisher.cyclic.app/cart/${id}`,{quantity:data.quantity+amount})
  };

//   const handleDelete=async(userID)=>{
//     axios.get(`https://cyan-splendid-kingfisher.cyclic.app/cart/delete/${userID}`,{
//         method:"DELETE",
//         headers:{
//             Authorization:localStorage.getItem("token")
//         }
//     })
//  }

  return (
    <div style={{  padding: 5 }}>
      {
        //  body
      }
      {data.map((item) => (
        
              <Item
          key={item.id}
          id={item.id}
          image={item.image}
          label={item.name}

          price={item.price}
          qyt={item.qyt}
          hendalqty={hendalqty}

        //  handleDelete={handleDelete(item._id)}
          
        />
       
        
       
        
      ))}

      {
        // total
      }
      <Flex style={{display:"flex",justifyContent:"end",border:"5px solid pink"
      ,width:"25%",marginLeft:"558px",marginTop:"8px",
      fontWeight:"600",padding:"10px 10px"}}>Final Price :- <Total  total={totalsum(data)} /></Flex>
    </div>
  );
};
export default MainPage ;
