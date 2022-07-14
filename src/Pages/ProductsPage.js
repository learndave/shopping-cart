import React from 'react'
import { Link } from 'react-router-dom';
import { Cart } from '../Classes/Cart';

const ProductsPage = (props) => {

  let products = props.products;
  let productsList = products.getAllProducts();

  let Cart = props.cart;

  return (
    <div className='body products-page'>
        <h1 className='page-title'>
            Products
        </h1>
        <ul className='products-list'>
        {productsList.map((item) => {
              return (
                <div>
                  <Link to={`${item.id}`} className={`${item.id} products-list`}>
                    <div className={`${item.id} product-item-name`}>{item.name}</div>
                    <div className={`${item.id} product-item-details`}>{item.details}</div>
                    <div className={`${item.id} product-item-price`}>${item.price}</div>
                  </Link>
                  <button onClick={() => Cart.addToCart(item.id)} className={`${item.id} product-item-add-to-cart`}>Add to Cart</button>
                </div>
              );
            })}
        </ul>
    </div>
  )
}

export default ProductsPage