import React from 'react'
import "./ProductCss/ProductItem.css"
import {useNavigate} from "react-router-dom"
import { useState } from 'react';
import { useToast } from '@chakra-ui/react'


export const ProductItem = ({  _id,name,image_url,offerPrice,actualPrice,discount}) => {
  const navigate=useNavigate();
  const [wishlisted,setWishlisted]=useState(false)
  const toastWishlist=useToast()
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
                <span>({discount}%)</span>
            </div>
            <div>
                <button>S</button>
                <button>M</button>
                <button>L</button>
                <button>XL</button>
            </div>
        </div>
        <div className='heart' >
            <img src={wishlisted?"/Images/heart_2.png":"/Images/heart_1.png"} alt="" onClick={()=>{
                setWishlisted(!wishlisted)
                wishlisted===false? toastWishlist({
                    title: 'Wishlist',
                    description: "Successfully Added To Wishlist",
                    status:'info',
                    duration: 1000,
                    isClosable: true,
                    position:'top',
                  }):toastWishlist({
                    title: 'Wishlist',
                    description: "Successfully Removed From Wishlist",
                    status:'info',
                    duration: 1000,
                    isClosable: true,
                    position:'top',
                  })
        }}/>
        </div>
        <div className='watch'>
            <img src="/Images/seen.png" alt="" onClick={()=>{
                navigate(`/products/:${_id}`)
            }}/>
        </div>
        {/* <div className='hot-deal'>
            <img src="/Images/hot-deal.png" alt="" />
        </div> */}
    </div>
  )
}