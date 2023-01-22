import styles from "./Cart.module.css";
import MainPage from "./Mainpage";
import { Flex ,Button} from "@chakra-ui/react";
import Total from "./Total";
import { useState } from "react";
import Item from "./Item"
import {  useNavigate } from "react-router-dom";



const Cart=()=>
{

   let price=localStorage.getItem("total")
   console.log(price)
   const navigate=useNavigate()
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
                         color:"white",backgroundColor:"rgb(247,102,174)",display:"flex",justifyContent:"start",alignItems:"center",
                         fontSize:"20px",paddingLeft:"5px"}}>ORDER SUMMERY</div>
                        
                        {/* border:"1px solid blue", */}
                         <div style={{width:"100%",height:"200px ", 
                          marginTop:"40px"}}>
                            <div style={{width:"100%",height:"50px "}}>

                        <Flex style={{display:"flex" ,justifyContent:"space-between",cursor:"pointer"}}>Total Item <h1>{price}</h1>  </Flex>    
                            </div>

                            <div style={{width:"100%",height:"50px ",display:"flex" ,justifyContent:"space-between"}} >
                                    <div>Shipping</div>
                                    <div style={{color:"grey",fontSize:"18px",fontWeight:"400",paddingRight:"2px"}}>Rs.0</div>
                            </div>
                            <div style={{width:"100%",height:"50px "}}>
                               
                                
                            <Flex style={{display:"flex" ,justifyContent:"space-between",cursor:"pointer"}}>Amount Payable <h1>{price}</h1></Flex>
                            </div>
                           {/* // onclick used to direct payment page */}
                            <div>

                            <Button style={{padding:"10px 10px", backgroundColor:"rgb(247,102,174)",display:"block",
                            color:"white",
                            fontSize:"15px",border:"none",cursor:"pointer",margin:"auto"}} onClick={()=>navigate("/payment")} >PLACE ORDER</Button>
                         </div>
                           
                           {/* <div style={{marginTop:"40px"}}>
                            <img src="https://assets0.mirraw.com/banner_sliders/10027/01_%281%29_main_webp.webp?1674107117" alt=""  width={400}/>
                           </div> */}
                         </div>

                        

                    </div>
                </div>
                
           
            </div>

        </>
    )
}
export default Cart