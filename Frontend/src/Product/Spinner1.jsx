import React from 'react'
import "./ProductCss/Spinner1.css"
import { Spinner } from '@chakra-ui/react'
export const Spinner1 = () => {
  return (
    <div className='spinner-div'>
        <Spinner className='spinner' thickness='8px' speed='0.65s' emptyColor='gray.200' color='red.800' size='xl'
   label="Loading..."/>
    </div>
  )
}
