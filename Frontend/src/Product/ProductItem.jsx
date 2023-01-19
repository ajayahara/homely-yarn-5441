import React from 'react'
import "./ProductCss/ProductItem.css"
import {useNavigate} from "react-router-dom"
export const ProductItem = ({  _id,name,image_url,offerPrice,actualPrice,discount}) => {
  const navigate=useNavigate()
  return (
    <div className='a-productitem'>
        <div className='a-productitem-image'>
            <img src={image_url} alt="Image1" />
        </div>
        <div className='a-productitem-div'>
            <div>
                <p>{name}</p>
            </div>
            <div>
                <span>₹{offerPrice}</span>
                <span>₹{actualPrice}</span>
                <span>({70}%)</span>
            </div>
            <div>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>
        </div>
        <div className='heart'>
            <img src="/Images/heart_bordered.png" alt="" />
        </div>
        <div className='watch'>
            <img src="/Images/seen.png" alt="" onClick={()=>{
                navigate(`/products/:${_id}`)
            }}/>
        </div>
        <div className='hot-deal'>
            <img src="/Images/hot-deal.png" alt="" />
        </div>
    </div>
  )
}