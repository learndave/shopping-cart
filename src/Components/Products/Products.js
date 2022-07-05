import React from 'react'
import Product from './Product'
import ProductsData from '../Data/ProductsData'

const Products = () => {
  return (
    <div>
        <h1>Products</h1>
        <ul className='products-list'>
          {ProductsData.map(productItem => {
            return(
              <Product productItem={productItem}/>
            )
          })}
        </ul>
    </div>
  )
}

export default Products