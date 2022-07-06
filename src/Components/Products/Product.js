import React from 'react'
import { Link } from 'react-router-dom';


import './Product.css';
import AddItemToCart from '../Cart/AddItemToCart';

const Product = (props) => {

  const productItem = props.productItem;

  return (
    <div className={`${productItem.id} product-item-container`}>
      <Link to={`${productItem.id}`} href="products" className={`${productItem.id} product-item`}>
        <h3 className='product-item-title'>
            {productItem.title}
        </h3>
        <sub className='product-item-description'>{productItem.desc}</sub>
        <div className='product-item-price'>$ {productItem.price}</div>
      </Link>
      <button onClick={() => AddItemToCart(productItem.id)} className={`${productItem.id} product-item-add-to-cart-button`}>Add to Cart</button>
    </div>
  )
}

export default Product;