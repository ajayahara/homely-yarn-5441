import React from 'react'
import { NavLink } from 'react-router-dom'
import "./Footer.css"
const Footer = () => {
  return (
   <>
    <div className='footer1'>
      <div className='footer-a'>
      <h1>Information</h1>
     
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <NavLink to="/products">  <li>Products</li></NavLink>
          <li>Sitemap</li>
          <li>Contact Us</li>
          <li>Track Order</li>
        </ul>
      </div>
      <div className='footer-b '>
      <h1>Extras</h1>
     
     <ul>
       <li>Delivery Information</li>
       <li>Privacy Policy</li>
       <li>Team & Condition</li>
       <li>Returns</li>
       <li>Careers</li>
       <li>Store Locator</li>
     </ul>
      </div>
      <div className='footer-c'>
      <h1>Shoppings</h1>
     
     <ul>
       <li>New Arrivals</li>
       <li>Bottom Wear</li>
       <li>Top Wear</li>
       <li>Denim</li>
      
     </ul>
      </div>
      <div className='footer-d'>
      <h1>Socials</h1>
        <div>
        <a href='https://www.facebook.com/groups/1920585314636378/'>
          <img src='https://cdn-icons-png.flaticon.com/128/145/145802.png'
            alt='facebook'
          />
          </a>
        </div>
        <div>
        <a href='https://www.instagram.com/abof_in/'>
          <img 
            src='https://cdn-icons-png.flaticon.com/128/1077/1077042.png'
            alt='instagram'

          />
          </a>
        </div>
        <div>
        <a href='https://twitter.com/hashtag/Abof'>
        <img 
            src='https://cdn-icons-png.flaticon.com/128/733/733635.png'
            alt='twiter'
          />
          </a>
        </div>
        <div>
        <a href='https://www.youtube.com/@abof2124'>
        <img 
            src='https://cdn-icons-png.flaticon.com/512/174/174883.png'
            alt='yputube'
          />
          </a>
        </div>
      </div>
    </div>
    <div className='footer2'>
<h1>All Rights Reserved Powered by ANS Commerce</h1>
    </div>
   </>
  )
}

export default Footer
