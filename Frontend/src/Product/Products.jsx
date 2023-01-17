import React from 'react'
import "./ProductCss/Products.css"
import { ProductsLeft } from './ProductsLeft'
import ProductsRight from './ProductsRight'
const Products = () => {
  return (
    <div className='a-products'>
          <ProductsLeft/>
          <ProductsRight/>
    </div>
  )
}

export default Products