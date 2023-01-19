import React from 'react'
import { useEffect,useState  } from 'react'
import "./ProductCss/ProductsRight.css"
import { ProductItem } from './ProductItem'
import { Spinner1 } from './Spinner1'

const ProductsRight = () => {
  const [products,setProducts]=useState(null);
  const getData= async (url)=>{
      try {
      const res=await fetch(url);
      const data=await res.json();
      setProducts(data.filter(el=>{
        return el.category==="Male-tshirt"
      }))
      } catch (error) {
        console.log(error);
      }
  }
  useEffect(()=>{
    getData("http://localhost:8080")
  },[])




  return (
    <>
    <div className='a-products-right'>
      <div className='a-products-right-top'>
          <div>
            <span>T-Shirts for Men</span><span>{products?.length}  Products</span>
          </div>
          <div>
          Choose Your Size:
          </div>
          <div>
            <div>
                <button>S({products?.length})</button>
                <button>M({products?.length})</button>
                <button>L({products?.length})</button>
                <button>XL({products?.length})</button>
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
        {(products==null)? <Spinner1/>:products.map((el)=>{
            return <ProductItem key={el._id} {...el}/>
        })}
    </div>
    </div>
    </>
  )
}

export default ProductsRight