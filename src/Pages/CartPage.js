import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const CartPage = ({cart, products}) => {

  let cartList = cart.cart;

  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    cartList = cart.cart; 
  },[refresh])

  const toggleRefresh = () => {
    if (refresh) {
      setRefresh(false);
    } else {
      setRefresh(true);
    }
  }

  return (
    <div className='body cart-page'>
        <h1 className='page-title'>
            Cart
        </h1>
        <ul className='cart-list'>
        {Object.entries(cartList).map((cartItem) => {
              let id = cartItem[0];
              let numberOfProducts = cartItem[1];
              let item = products.getProductByID(id);
              return (
                <div>
                  <Link to={`${item.id}`} className={`${item.id} products-list`}>
                    <div className={`${item.id} product-item-name`}>{item.name}</div>
                    <div className={`${item.id} product-item-details`}>{item.details}</div>
                    <div className={`${item.id} product-item-price`}>${item.price}</div>
                    <div className={`${item.id} product-item-price`}>{`${numberOfProducts} items`}</div>
                  </Link>
                  <button onClick={() => {cart.addToCart(id); toggleRefresh()}} className={`${item.id} product-item-add-to-cart`}>Add to Cart</button>
                </div>
              );
            })}
          <button className='clear-cart' onClick={() => {cart.clearCart(); toggleRefresh()}}>Clear Cart</button>
        </ul>
    </div>
  )
}

export default CartPage