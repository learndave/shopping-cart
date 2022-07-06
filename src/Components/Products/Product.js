import React from 'react'
import { Link } from 'react-router-dom';

import './Product.css';

const Product = (props) => {

  const productItem = props.productItem;

  return (
    <Link to={`${productItem.id}`} href="products" className={`${productItem.id} product-item`}>
        <h3 className='product-item-title'>
            {productItem.title}
        </h3>
        <sub className='product-item-description'>{productItem.desc}</sub>
        <div className='product-item-price'>$ {productItem.price}</div>
        <button className={`${productItem.id} product-item-add-to-cart-button`}>Add to Cart</button>
    </Link>
  )
}

export default Product;