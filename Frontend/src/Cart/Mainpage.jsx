import { useState,useEffect } from "react";
import Item from "./Item";
import Total from "./Total";
import { Flex } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import axios from "axios"


const MainPage = () => {
  const [data, setData] = useState(null);
  const toast=useToast()

  const [Total,setTotal]=useState("")
  localStorage.setItem("total",(Total))
   console.log(Total)

  useEffect(() => {
    let  getCartData=async()=>{
      let res=await axios.get("https://cyan-splendid-kingfisher.cyclic.app/cart",{
            headers:{
                "Content-type":"application/json",
              "Authorization":localStorage.getItem("token")
          }
      });
    //   console.log(res)
    let x= res.data.reduce((acc, c) => acc + c.qty * c.offerPrice, 0)
    // console.log(qty)
    setTotal(x)
      setData(res.data);
    }
    getCartData()
  },[])
   

  const hendalqty = (id) => {
    // let newdata = data.map((item) =>
    //   item.id === id ? { ...item, qyt: item.qyt + amount } : item
    // );
    // setData(newdata);

//     let data=await axios.get(`https://cyan-splendid-kingfisher.cyclic.app/cart/${id}`);
    
//     await axios.patch(`https://cyan-splendid-kingfisher.cyclic.app/cart/${id}`,{quantity:data.quantity+amount})



const payload={
    name:data.name,
      actualPrice:data.actualPrice,
      offerPrice:data.offerPrice,
      image_url:data.image_url,
      discount:data.discount,
      category:data.category,
      color:data.color,
      gender:data.gender,
      qty:1
  }
    fetch(`https://cyan-splendid-kingfisher.cyclic.app/cart/modify/${id}`,{
      method:"PATCH",
      body:JSON.stringify(payload),
      headers:{
        "Content-type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
    }).then((res)=>{
      // console.log(res)
    return  res.json()
    }).then((res)=>{
      // console.log(res)
      toast({
        title: 'Cart',
        description: "Added to cart Successfully",
        status: 'success',
        duration: 3000,
        isClosable: true,
        position: 'top',
    })
      
    }).catch((err)=>{
      console.log(err)
    })
  
    }

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
      {data ?.map((item) => (
        
              <Item
          key={item.id}
          id={item._id}
          image={item.image_url}
          label={item.name}

          price={item.offerPrice}
          qty={item.qty}
          hendalqty={hendalqty}

        //  handleDelete={handleDelete(item._id)}
          
        />
       
        
       
        
      ))}

      {
        // total
      }
      <div style={{marginTop:"20px",paddingLeft:"570px"}}>Total Price:{Total}</div>
    </div>
  );
};
export default MainPage ;
