import React from 'react'
import {Route,Routes} from "react-router-dom"
import Home from '../Home/Home'
// import MainHome from '../Home/MainHome'
import Products from '../Product/Products'
import { SingleProduct } from '../SingleProduct/SingleProduct'
export const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/register' element={<div>Register</div>}></Route>
        <Route path='/login' element={<div>Login</div>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path='/cart' element={<div>Cart</div>}></Route>
        <Route path='/payment' element={<div>Payment</div>}></Route>
        <Route path='/profile' element={<div>Profile</div>}></Route>
        <Route path='*' element={<div>No Page Found</div>}></Route>
    </Routes>
  )
}
