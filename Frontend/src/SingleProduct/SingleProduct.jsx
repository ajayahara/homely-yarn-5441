import React, { useState } from 'react';
import { useEffect } from 'react';
import {Row,Col,ListGroup,Button, Image, ListGroupItem} from "react-bootstrap"
import { useParams } from 'react-router-dom';
export const SingleProduct = () => {
  const handleadd=(_id)=>{
    localStorage.setItem("id",(_id))
   console.log(_id)
  }
  let {id}=useParams()
  // const _id=id
  // console.log(_id)
  const [data,setData]=useState(null)
  useEffect(()=>{
    console.log(id)
    fetch(`https://cyan-splendid-kingfisher.cyclic.app/products/get/${id}`).then((res)=>{
      // console.log(res)
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
