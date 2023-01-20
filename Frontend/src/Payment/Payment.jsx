import React from 'react'
import { useState } from 'react'
import "./Payment.css"

export const Payment = () => {
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
    const [address]=useState(initialAddress)
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
                                <input type="text" name="" id="" defaultValue={address.First_name} required/>
                            </div>
                            <div>
                                <label>Last name</label>
                                <input type="text" name="" id="" defaultValue={address.Last_name} required />
                            </div>
                            <div>
                                <label>Email</label>
                                <input type="email" name="" id="" defaultValue={address.Email} required />
                            </div>
                            <div>
                                <label>Country</label>
                                <input type="text" name="" id="" value={"India"} disabled={true}/>
                            </div>
                            <div>
                                <label> Postal Code</label>
                                <input type="number" name="" id="" defaultValue={address.Postal_Code} required />
                            </div>
                            <div>
                                <label>Address Line 1</label>
                                <input type="text" name="" id="" defaultValue={address.Address_Line_1} required/>
                            </div>
                            <div>
                                <label>Address Line 2</label>
                                <input type="text" name="" id="" defaultValue={address.Address_Line_2} required/>
                            </div>
                            <div>
                                <label>City</label>
                                <input type="text" name="" id="" defaultValue={address.City} required/>
                            </div>
                            <div>
                                <label>State</label>
                                <input type="text" name="" id="" defaultValue={address.State} required/>
                            </div>
                            <div>
                                <label>Mobile No</label>
                                <input type="text" name="" id="" defaultValue={address.Mobile_No} required />
                            </div>
                            <div>
                                <label>Ship to Same Address</label>
                                <input type="checkbox" name="" id="" checked={true} />
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
                            <span>AMOUNT PAYABLE: Rs 8391</span>
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
                                    <input type="radio" name="" id="" checked />
                                </div>
                            </div>
                        </div>
                        <div className='a-div2-right'>
                            <div>
                                <button>Place Order</button>
                            </div>
                            <div>
                                <label> I agree to receive news letters from ASAV</label>
                                <input type="checkbox" name="" id="" checked />
                            </div>
                        </div>
                    </div>
                    <div className='a-payment-notice'>
                        After clicking on the "Place Order" button, you will be directed to a secure payment gateway.
                    </div>
                    <div className='a-div-modify'>
                        Modify Cart
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
                            <span>Rs 8391</span>
                        </div>
                    </div>
                    <div className="a-div-total">
                        <div>
                            <span>Total</span>
                            <span>Rs 8391</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
