import React from 'react'
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
          <li>Products</li>
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
          <img src='https://cdn-icons-png.flaticon.com/128/145/145802.png'
            alt='facebook'
          />
        </div>
        <div>
          <img 
            src='https://cdn-icons-png.flaticon.com/128/1077/1077042.png'
            alt='instagram'
          />
        </div>
        <div>
        <img 
            src='https://cdn-icons-png.flaticon.com/128/733/733635.png'
            alt='twiter'
          />
        </div>
        <div>
        <img 
            src='https://cdn-icons-png.flaticon.com/512/174/174883.png'
            alt='yputube'
          />
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