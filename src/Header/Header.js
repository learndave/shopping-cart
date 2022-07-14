import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { clearCart, addToCart, getCartLength, updateLocalStorage, getCartFromLocalStorage } from "../Classes/Cart"; 


const Header = ({cart}) => {

  return (
    <nav className='header'>
        <Link className='header-logo' to="/">Logo</Link>
        <ul className='header-nav'>
            <Link className="header-nav-list" to="products">Products</Link>
        </ul>
        <Link className='header-cart' to="cart">Cart ({getCartLength(cart)})</Link>
    </nav>
  )
}

export default Header