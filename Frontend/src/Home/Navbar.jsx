import React from 'react'

import {Link, useNavigate} from "react-router-dom"

import {
  Icon,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button,

} from '@chakra-ui/react'
import {AiOutlineShoppingCart} from "react-icons/ai"
import "./Navbar.css"

const Navbar = () => {
const navigate=useNavigate();
  return (
<div style={{display:"flex",flexDirection:"column",position:"sticky",top:"0",paddingBottom:"10px",borderBottom:"1px solid gray"}}>

    <div className='Hnavbarcss'>


    <div className='Hup'>
         <div >
    <ul className='H-left'>
        {/* <Link>High Contrast</Link>
        <Link>Contact Sales</Link> */}

    </ul>

    </div>



    <div >
    <ul className='H-right'>
         <Link to='/products'>Product</Link>
          <Link to="/">Home</Link>
      
       
       
         

           <Menu>
  <MenuButton as={Link} >
  <Link>About</Link>
  
  </MenuButton>
  <MenuList>
    <MenuItem>About Us </MenuItem>
    <MenuItem>Contact Us</MenuItem>
    <MenuItem>Carrers</MenuItem>
    <MenuItem>Investor Relations</MenuItem>
    <MenuItem>Management Teams</MenuItem>
  </MenuList>
</Menu>
         
         <Link to="/cart"><Icon as={AiOutlineShoppingCart}></Icon></Link>
        
         

    </ul>

    </div>

    </div>


    <div className='down'>

     <div className='logo-link'>
       <div className='logo-ewb'>
          <img src="https://imagescdn.abof.com/img/app/brands/abof/abof_logo_1.png"  alt='logo' width="100px"/>
        
      </div>


      <div >
          <ul className='links-down'>


          <Menu closeOnSelect={false}>
  <MenuButton as={Link} colorScheme='blue'>
  <Link>Men</Link>
  </MenuButton>
  <MenuList minWidth='240px'>
    <MenuOptionGroup defaultValue='asc'>
     <Link to="/products"><MenuItemOption value='asc'>Shirt</MenuItemOption></Link> 
      <MenuItemOption value='desc'>Jeans</MenuItemOption>
   
      <MenuItemOption value='email'>T-shirt</MenuItemOption>
      <MenuItemOption value='phone'>PullOver</MenuItemOption>
      <MenuItemOption value='country'>Undergarment</MenuItemOption>
    </MenuOptionGroup>
  </MenuList>
            </Menu>

            <Link>Women</Link>
            <Link>Children</Link>
            <Link>Girl</Link>

            <Menu closeOnSelect={false}>
  <MenuButton as={Link} colorScheme='blue'>
  <Link>Resources</Link>
  </MenuButton>
  <MenuList minWidth='250px'>
    <MenuOptionGroup defaultValue='asc'>
      <MenuItem>About Us </MenuItem>
    <MenuItem>Contact Us</MenuItem>
    <MenuItem>Carrers</MenuItem>
    </MenuOptionGroup>
  </MenuList>
            </Menu>
           
         
           
          </ul>
      </div>

     </div>
      <div className='button-down'>
       <button id='first-btn' onClick={()=>navigate("/login")} >Login</button> 
        <button onClick={()=>navigate("/register")} >Register </button>
      </div>

    </div>

   
       

       
   

    
    </div>
   
    
    </div>
  )
}

export default Navbar