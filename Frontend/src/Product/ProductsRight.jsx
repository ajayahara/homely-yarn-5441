import React from 'react'
import "./ProductCss/ProductsRight.css"
import { ProductItem } from './ProductItem'

const ProductsRight = () => {
  const arr=new Array(50).fill(0)
  return (
    <div className='a-products-right'>
        {arr.map((el)=>{
            return <ProductItem/>
        })}
    </div>
  )
}

export default ProductsRight