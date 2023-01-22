import React, { useEffect, useState } from 'react'
import "./Admin.css"
import { AdminCard } from './AdminCard';
export default function Admin() {
    const [sort,setSort]=useState("");
    const [products,setProducts]=useState(null);
    const getData=(url)=>{
        fetch(url).then((res)=>res.json()).then((data)=>{
            if(sort===""){
                setProducts(data)
                return;
            }else{
                let new_product=data.filter((el)=>{
                    return el.category===sort;
                })
                setProducts(new_product)
                console.log(new_product,sort)
            }
        }).catch((err)=>{
            console.log(err)
        })
    }
    const handleChange=(e)=>{
        setSort(e.target.value)
    }
    useEffect(()=>{
        // getData("https://cyan-splendid-kingfisher.cyclic.app/products/get")
    },[sort])
    // useEffect(()=>{
    //     handleFilter()
    // },[sort])
  return (
    <div className='admin'>
        <div className='Admin-head'>
            <div>
                Hello Ajaya
            </div>
            <div>
                <select name="" id="" onChange={handleChange} value={sort}>
                    <option value="">Select a category</option>
                    <option value="Male-tshirt"> Male-tshirt</option>
                    <option value="Girls-tshirt">Girls-tshirt</option>
                    <option value="Male-Bottom">Male-Bottom</option>
                    <option value="Boy-bottom"> Boy-bottom</option>
                </select>
            </div>
        </div>
        <div className='product-admin'>
            {products?.map((el)=>{
                return <AdminCard key={el._id} {...el}/>
            })}
        </div>
    </div>
  )
}
