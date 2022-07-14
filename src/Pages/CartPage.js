import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { clearCart } from '../Classes/Cart';

const CartPage = ({cart, products, AddToCart, ClearCart}) => {
  return (
    <div className='body cart-page'>
        <h1 className='page-title'>
            Cart
        </h1>
        <ul className='cart-list'>
        {Object.entries(cart).map((cartItem) => {
              let id = cartItem[0];
              let numberOfProducts = cartItem[1];
              let item = products.getProductByID(id);
              if (item != false) {
              return (
                <div>
                  <Link to={`${item.id}`} className={`${item.id} products-list`}>
                    <div className={`${item.id} product-item-name`}>{item.name}</div>
                    <div className={`${item.id} product-item-details`}>{item.details}</div>
                    <div className={`${item.id} product-item-price`}>${item.price}</div>
                    <div className={`${item.id} product-item-price`}>{`${numberOfProducts} items`}</div>
                  </Link>
                  <button onClick={() => AddToCart(item.id)} className={`${item.id} product-item-add-to-cart`}>Add to Cart</button>
                </div>
              )} else {
                return (<></>);
              }
            })}
          <button className='clear-cart' onClick={() => ClearCart()}>Clear Cart</button>
        </ul>
    </div>
  )
}

export default CartPage