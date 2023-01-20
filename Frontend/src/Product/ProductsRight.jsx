import React from 'react'
import { useEffect,useState  } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import "./ProductCss/ProductsRight.css"
import { ProductItem } from './ProductItem'
import { Spinner1 } from './Spinner1'

const ProductsRight = () => {
  const [query]=useSearchParams("")
  const [color,setColor]=useState(null);
  const [price,setPrice]=useState(null);
  const [products,setProducts]=useState(null);
  const location=useLocation()
  const getData= async (url)=>{
    setProducts(null)
      try {
      const res=await fetch(url);
      let  data=await res.json();
      data=data.filter(el=>{
        return el.category==="Male-tshirt"
      });
      if(color!==""){
        data=data.filter(el=>{
          return el.color===color
        });
      }
      if(price!==""){
        if(price==="399 And Below"){
          data=data.filter(el=>{
            return el.offerPrice<=399
          });
        }else{
          data=data.filter(el=>{
            return el.offerPrice>399&&el.offerPrice<=599
          });
        }
      }
      setProducts(data)
      } catch (error) {
        console.log(error);
      }
  }
  const handleSort=(e)=>{
      if(e.target.value===""){
        return;
      }
      if(e.target.value==="Price Low to High"){
       const sort_products=products.sort((a,b)=>{
          return a.offerPrice-b.offerPrice
        })
        setProducts([...sort_products])
        return;
      }
      if(e.target.value==="Price High to Low"){
        const sort_products=products.sort((a,b)=>{
          return b.offerPrice-a.offerPrice
        })
        setProducts([...sort_products])
        return;
      }
  }
  useEffect(()=>{
    setColor(query.get("color")||"");
    setPrice(query.get("price")||"")
  },[location.search,query])

  useEffect(()=>{
    getData("https://cyan-splendid-kingfisher.cyclic.app/products/get")
  },[color,price])


console.log(products)

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
              <select name="" id="" onChange={(e)=>{
                  handleSort(e)
              }}>
                <option value="">Popular</option>
                <option value="">New Arrivals</option>
                <option value="">Discount</option>
                <option value="Price Low to High">Price Low to High</option>
                <option value="Price High to Low">Price High to Low</option>
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