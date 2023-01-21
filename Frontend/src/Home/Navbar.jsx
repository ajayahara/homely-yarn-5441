import React from 'react'
import "./Navbar.css"
 import { NavLink } from 'react-router-dom'
const Navbar = () => {
   
  return (
    <>
        <div className='navbar'>
        <div >
                <NavLink to="/">
                  <img src='https://tse3.mm.bing.net/th?id=OIP.8R7o26MsbKfBUM9pEaWhFwHaHa&pid=Api&P=0' 
                    alt='navimg'
                  />
                </NavLink>
            </div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
           <div></div>
        <div>
                <NavLink to="/">Home</NavLink>
            </div>
            <div>
            <NavLink to="/products" className='signup'>Product</NavLink>
            </div>
            <div>
                <NavLink to="/login">Log In</NavLink>
            </div>
            <div>
            <NavLink to="/register" className='signup'>Register</NavLink>
            </div>
           
            
        </div>
    </>
  )
}

export default Navbar