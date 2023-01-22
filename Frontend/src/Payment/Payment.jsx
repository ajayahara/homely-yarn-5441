import { useToast } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import "./Payment.css";
import { useNavigate } from 'react-router-dom';

export const Payment = () => {
    const navigate=useNavigate()

    let price=localStorage.getItem("total")
    const initialAddress={
        First_name:"Ajaya Kumar",
        Last_name:"Behera",
        Email:"abak00350@gmail.com",
        Country:"India",
        Postal_Code:754009,
        Address_Line_1:"At-Krushnapalli",
        Address_Line_2:"Near Trinath Temple",
        City:"Cuttack",
        State:"Odisha",
        Mobile_No:6370014498
    }
    const [address,setAddress]=useState(initialAddress)
    const toast=useToast();
    const handleClick=(e)=>{
     const   {First_name,Last_name,Email,Country,Postal_Code,Address_Line_1,Address_Line_2,City,State,Mobile_No
        }=address
        if(First_name&&Last_name&&Email&&Country&&Postal_Code&&Address_Line_1&&Address_Line_2&&City&&State&&Mobile_No){
            toast({
                title: 'Payment',
                description: ["How Is The Josh! Order Placed Successfully"],
                status:'success',
                duration: 3000,
                isClosable: true,
                position:'top',
            })
            navigate("/")
        }else{
            toast({
                title: 'Payment',
                description: ["Fill Form Correctly"],
                status:'warning',
                duration: 3000,
                isClosable: true,
                position:'top',
            })
        }
    }
    return (
        <div className='a-payment'>
            <div className='a-payment-heading'>
                Shipping And Payment
            </div>
            <div className='a-payment-body'>
                <div className='a-payment-div1'>
                    <div className='a-payment-div1-top'>
                        <span> 1.Billing Details</span>
                        <span>Change Address</span>
                    </div>
                    <div className='a-payment-div1-bottom'>
                        <form className='a-payment-form'>
                            <div>
                                <label>First name</label>
                                <input type="text" name="" id="" value={address.First_name} required onChange={(e)=>{
                                    setAddress({...address,First_name:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>Last name</label>
                                <input type="text" name="" id="" value={address.Last_name} required onChange={(e)=>{
                                    setAddress({...address,Last_name:e.target.value})
                                }}  />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" name="" id="" value={address.Email} required  onChange={(e)=>{
                                    setAddress({...address,Email:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>Country</label>
                                <input type="text" name="" id="" value={"India"} disabled={true}/>
                            </div>
                            <div>
                                <label> Postal Code</label>
                                <input type="number" name="" id="" value={address.Postal_Code} required  onChange={(e)=>{
                                    setAddress({...address,Postal_Code:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>Address Line 1</label>
                                <input type="text" name="" id="" value={address.Address_Line_1} required onChange={(e)=>{
                                    setAddress({...address,Address_Line_1:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>Address Line 2</label>
                                <input type="text" name="" id="" value={address.Address_Line_2} required onChange={(e)=>{
                                    setAddress({...address,Address_Line_2:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>City</label>
                                <input type="text" name="" id="" value={address.City} required onChange={(e)=>{
                                    setAddress({...address,City:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>State</label>
                                <input type="text" name="" id="" value={address.State} required onChange={(e)=>{
                                    setAddress({...address,State:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>Mobile No</label>
                                <input type="text" name="" id="" value={address.Mobile_No} required  onChange={(e)=>{
                                    setAddress({...address,Mobile_No:e.target.value})
                                }} />
                            </div>
                            <div>
                                <label>Ship to Same Address</label>
                                <input type="checkbox" name="" id="" defaultChecked={true} />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='a-payment-div2'>
                    <div className='a-payment-div2-top'>
                        2. Payment Method
                    </div>
                    <div className='a-payment-div2-bottom'>
                        <div className='a-div2-left'>
                            <span>AMOUNT PAYABLE: Rs {price}</span>
                            <div>
                                <div>
                                    <label> Credit/Debit Card/Net Banking/Wallet</label>
                                    <input type="radio" name="" id="" disabled />
                                </div>
                                <div>
                                    <label>Paytm</label>
                                    <input type="radio" name="" id="" disabled />
                                </div>
                                <div>
                                    <label>Cash On Delivery</label>
                                    <input type="radio" name="" id="" defaultChecked />
                                </div>
                            </div>
                        </div>
                        <div className='a-div2-right'>
                            <div>
                                <button onClick={handleClick}>Place Order</button>
                            </div>
                            <div>
                                <label> I agree to receive news letters from ASAV</label>
                                <input type="checkbox" name="" id="" defaultChecked />
                            </div>
                        </div>
                    </div>
                    <div className='a-payment-notice'>
                        After clicking on the "Place Order" button, you will be directed to a secure payment gateway.
                    </div>
                    <div className='a-div-modify'>
                       <a href="/cart">Modify Cart</a>
                    </div>
                    <div className='a-div-details'>
                        <div>
                            <span>Delivery</span>
                            <span>5 days</span>
                        </div>
                        <div>
                            <span>Shipping Fee</span>
                            <span>FREE</span>
                        </div>
                        <div>
                            <span>Item Total</span>
                            <span>Rs {price}</span>
                        </div>
                    </div>
                    <div className="a-div-total">
                        <div>
                            <span>Total</span>
                            <span>Rs {price}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
