import React from 'react'
import {Route,Routes} from "react-router-dom"
import Products from '../Product/Products'
import { SingleProduct } from '../SingleProduct/SingleProduct'

import Cart from "../Cart/Cart"

export const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<div>Home</div>}></Route>
        <Route path='/register' element={<div>Register</div>}></Route>
        <Route path='/login' element={<div>Login</div>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/payment' element={<div>Payment</div>}></Route>
        <Route path='/profile' element={<div>Profile</div>}></Route>
        <Route path='*' element={<div>No Page Found</div>}></Route>
    </Routes>
  )
}
