import React from 'react'
import "./ProductCss/ProductItem.css"
export const ProductItem = () => {
  return (
    <div className='a-productitem'>
        <div className='a-productitem-image'>
            <img src="https://imagescdn.abof.com/img/app/product/6/688972-7326676.JPG?auto=format&w=207.9375" alt="Image1" />
        </div>
        <div className='a-productitem-div'>
            <div>
                <p>abof Men Slim Fit T Shirt</p>
            </div>
            <div>
                <span>₹383</span>
                <span>₹1380</span>
                <span>(70%)</span>
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
            <img src="/Images/seen.png" alt="" />
        </div>
    </div>
  )
}