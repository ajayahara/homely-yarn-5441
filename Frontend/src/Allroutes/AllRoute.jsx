import React from 'react'
import {Route,Routes} from "react-router-dom"
import MainHome from '../Home/MainHome'
import { Login } from '../Login/Login'
import { Payment } from '../Payment/Payment'
import Products from '../Product/Products'
import { Register } from '../Register/Register'
import { SingleProduct } from '../SingleProduct/SingleProduct'
export const AllRoute = () => {
  return (
    <Routes>
        <Route path='/' element={<MainHome/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/products' element={<Products/>}></Route>
        <Route path='/products/:id' element={<SingleProduct/>}></Route>
        <Route path='/cart' element={<div>Cart</div>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='*' element={<div>No Page Found</div>}></Route>
    </Routes>
  )
}
