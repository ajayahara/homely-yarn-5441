import React from 'react'
import "./ProductCss/ProductsRight.css"
import { ProductItem } from './ProductItem'

const ProductsRight = () => {
  const arr=new Array(50).fill(0)
  return (
    <div className='a-products-right'>
      <div className='a-products-right-top'>
          <div>
            <span>T-Shirts for Men</span><span>225  Products</span>
          </div>
          <div>
          Choose Your Size:
          </div>
          <div>
            <div>
                <button>S(170)</button>
                <button>M(170)</button>
                <button>L(170)</button>
                <button>XL(170)</button>
            </div>
            <div>
              <span>Sort:</span>
              <select name="" id="">
                <option value="">Popular</option>
                <option value="">New Arrivals</option>
                <option value="">Discount</option>
                <option value="">Price Low to High</option>
                <option value="">Price High to Low</option>
              </select>
            </div>
          </div>
          <div>
            <hr  className='a-line'/>
          </div>
      </div>
      <div className='a-products-right-bottom'>
        {arr.map((el)=>{
            return <ProductItem/>
        })}
    </div>
    </div>
    
  )
}

export default ProductsRight