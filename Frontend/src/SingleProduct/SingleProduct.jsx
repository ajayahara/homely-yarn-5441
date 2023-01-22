import React, { useState } from 'react';
import { useEffect } from 'react';
import {Row,Col,ListGroup,Button, Image, ListGroupItem} from "react-bootstrap"
import { useParams } from 'react-router-dom';
import { useToast } from '@chakra-ui/react'

export const SingleProduct = () => {
  const toast=useToast()
  const [data,setData]=useState(null)
  const handleadd=(_id)=>{
    
const payload={
  name:data.name,
    actualPrice:data.actualPrice,
    offerPrice:data.offerPrice,
    image_url:data.image_url,
    discount:data.discount,
    category:data.category,
    color:data.color,
    gender:data.gender,
    qty:1
}
  fetch(`https://cyan-splendid-kingfisher.cyclic.app/cart/create`,{
    method:"POST",
    body:JSON.stringify(payload),
    headers:{
      "Content-type":"application/json",
      "Authorization":localStorage.getItem("token")
    },
  }).then((res)=>{
    // console.log(res)
  return  res.json()
  }).then((res)=>{
    // console.log(res)
    toast({
      title: 'Cart',
      description: "Added to cart Successfully",
      status: 'success',
      duration: 3000,
      isClosable: true,
      position: 'top',
  })
    
  }).catch((err)=>{
    console.log(err)
  })

  }
  let {id}=useParams()
  
  
  useEffect(()=>{
    console.log(id)
    fetch(`https://cyan-splendid-kingfisher.cyclic.app/products/get/${id}`).then((res)=>{
      
    return  res.json()
    }).then((res)=>{
      console.log(res)
      setData(res[0])
    }).catch((err)=>{
      console.log(err)
    })
  },[])
// console.log(params)
  return (
    <div style={{display:"flex",justifyContent:"center",alignItem:"center",marginTop:"20px"}}>
      <Row>
        <Col  mD={6}>
          <Image src={data ?.image_url}  alt={data?.name} fluid/>
        </Col>
        <Col mD={3}>
          <ListGroup variant="flush">
            <ListGroupItem>
              <h3>Title:{data?.name}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <h3> Price : $ {data?.actualPrice}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <h3>{data?.description}</h3>
            </ListGroupItem>
            <ListGroupItem>
              <h3>Color:{data?.color}</h3>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col>
        <Row>
          {/* <col>
          <Button>ADD TO CART</Button>
          </col> */}
          <ListGroupItem>
              <Button style={{backgroundColor:"rgb(201,4,143)",color:"white",padding:"10px 10px",borderRadius:"5px"}} 
              className='btn_block' type="button" onClick={()=>handleadd(data._id)}>Add to Cart</Button>
            </ListGroupItem>
        </Row>
        </Col>
      </Row>
    </div>
  )
}
