import React from 'react'
import Product from './Product'
import Data from '../Data/Data'

const Products = () => {
  console.log(Data);
  return (
    <div>
        <h1>Products</h1>
        <ul className='products-list'>
          {Data.map(productItem => {
            return(
              <Product productItem={productItem}/>
            )
          })}
        </ul>
    </div>
  )
}

export default Products