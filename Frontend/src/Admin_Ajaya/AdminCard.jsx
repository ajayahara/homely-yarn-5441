import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./AdminCard.css"
export const AdminCard = ({ _id,name,image_url,offerPrice,actualPrice,discount,category,gender,color}) => {
    const navigete=useNavigate()
    const handleDelete=()=>{
        fetch("",{
            method:"POST",
            headers:{
                'Content-type':'application/json',
                'Authorization':localStorage.getItem("token")
            }
        })
    }
  return (
    <div className='a-productitem'>
    <div className='a-productitem-image'>
        <img src={image_url} alt="Image1" />
    </div>
    <div className='a-productitem-div1'>
        <div>
            <p>{name}</p>
        </div>
        <div>
            <span>₹{offerPrice}</span>
            <span>₹{actualPrice}</span>
            <span>({discount}%)</span>
        </div>
        <div>
            <p>Category: {category}</p>
            <p>Color:{color}</p>
            <p>Gender:{gender}</p>
            <p>ID:{_id}</p>
        </div>
        <div >
            <button onClick={()=> navigete(`/Admin/edit/${_id}`)}>Edit </button>
            <button onClick={()=>handleDelete()}>Delete</button>
        </div>
    </div>
</div>
  )
}
