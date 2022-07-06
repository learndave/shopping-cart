import React from 'react'

const ProductPage = (props) => {
  let productItem = props.productItem ;
  
  return (
    <div>This is a product page for {productItem.title} with ID <i>{productItem.id}</i>.</div>
  )
}

export default ProductPage