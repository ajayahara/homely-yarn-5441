import styles from "./Cart.module.css";
import MainPage from "../Cart/Mainpage";
import { Flex ,Button} from "@chakra-ui/react";
import Total from "./Total";
import { useState } from "react";
import Item from "./Item"


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
const Cart=()=>
{
    const [data, setData] = useState(Initialdata);

    const totalsum = (data) => {
        return data.reduce((acc, c) => acc +  c.price, 0);
      };
      const hendalqty = (id, amount) => {
        let newdata = data.map((item) =>
          item.id === id ? { ...item, qyt: item.qyt + amount } : item
        );
        setData(newdata);
      };
    return (
         <>
            
            <div className={styles.cart_main_div}>
                <div className={styles.cart_top_div}>
                    <div className={styles.top_inner_div}>
                        100% Money Back Guarantee
                    </div>
                    <div className={styles.top_inner_div}>Free Shipping Within India</div>
                    <div className={styles.top_inner_div}>7 Day Return</div>
                    <div className={styles.top_inner_div}>Ships Worldwide</div>
                    <div className={styles.top_inner_div}>91-2200229090</div>

                </div>
                <div className={styles.cart_middle_div}>

                    <div className={styles.cart_left_div}>
                        
                   < MainPage/>  
                    </div>
                    <div className={styles.cart_right_div}>
                         <div style={{width:"99%",height:"40px" , marginTop:"20px",
                         color:"white",backgroundColor:"pink",display:"flex",justifyContent:"start",alignItems:"center",
                         fontSize:"20px",paddingLeft:"5px"}}>ORDER SUMMERY</div>
                        
                        {/* border:"1px solid blue", */}
                         <div style={{width:"100%",height:"200px ", 
                          marginTop:"40px"}}>
                            <div style={{width:"100%",height:"50px "}}>

                        <Flex style={{display:"flex" ,justifyContent:"space-between",cursor:"pointer"}}>Total Item  <Total total={totalsum(data)} /></Flex>    
                            </div>

                            <div style={{width:"100%",height:"50px ",display:"flex" ,justifyContent:"space-between"}} >
                                    <div>Shipping</div>
                                    <div style={{color:"grey",fontSize:"18px",fontWeight:"400",paddingRight:"2px"}}>Rs.0</div>
                            </div>
                            <div style={{width:"100%",height:"50px "}}>
                               
                                
                            <Flex style={{display:"flex" ,justifyContent:"space-between",cursor:"pointer"}}>Amount Payable <Total total={totalsum(data)} /></Flex>
                            </div>
                           {/* // onclick used to direct payment page */}
                            <div>

                            <Button style={{padding:"10px 10px", backgroundColor:"pink",display:"block",
                            color:"white",
                            fontSize:"15px",border:"none",cursor:"pointer",margin:"auto"}} >PLACE ORDER</Button>
                         </div>
                           
                           <div style={{marginTop:"40px"}}>
                            <img src="https://assets0.mirraw.com/banner_sliders/10027/01_%281%29_main_webp.webp?1674107117" alt=""  width={400}/>
                           </div>
                         </div>

                        

                    </div>
                </div>
                

            </div>

        </>
    )
}
export default Cart