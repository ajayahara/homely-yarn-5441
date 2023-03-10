import React from 'react'

import { Link, useNavigate } from "react-router-dom"

import {
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
import "./Navbar.css"
import { useState } from 'react'
import { useEffect } from 'react'
import {AiOutlineShoppingCart} from "react-icons/ai"

const Navbar = () => {
  const [login,setLogin]=useState(false)
  const navigate = useNavigate();
  useEffect(()=>{
    localStorage.getItem("User")?setLogin(true):setLogin(false)
  },[])
  return (
    <div style={{ display: "flex", flexDirection: "column", top: "0", paddingBottom: "10px", borderBottom: "1px solid gray" }}>
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
              <Link to="/cart"><h1 ><AiOutlineShoppingCart/></h1></Link>
            </ul>
          </div>
        </div>
        <div className='down'>
          <div className='logo-link'>
            <div className='logo-ewb'>
              <img src="https://imagescdn.abof.com/img/app/brands/abof/abof_logo_1.png" alt='logo' width="100px" />
            </div>
            <div className='link-down-div'>
              <ul className='links-down'>
                <Menu closeOnSelect={false}>
                  <MenuButton as={Link} colorScheme='blue'>
                    <Link>Men</Link>
                  </MenuButton>
                  <MenuList minWidth='240px'>
                    <MenuOptionGroup defaultValue='asc'>
                      <Link to="/products"><MenuItemOption value='asc'>Shirt</MenuItemOption></Link>
                      <MenuItemOption value='desc'>Jeans</MenuItemOption>
                      <MenuItemOption value='email' onClick={()=>{
                        navigate("/products")
                      }}>T-shirt</MenuItemOption>
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
            <button id='first-btn' onClick={() => navigate("/login")} >
              {login?localStorage.getItem("User"):"Login"}
              </button>
            <button onClick={localStorage.getItem("User")?()=>{
              localStorage.clear();
              setLogin(false)
            }:() => navigate("/register")} >
              {login?"Logout":"Register"}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar