import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
  return (
    <nav className='header'>
        <Link className='header-logo' to="/">Logo</Link>
        <ul className='header-nav'>
            <Link className="header-nav-list" to="products">Products</Link>
        </ul>
        <Link className='header-cart' to="cart">Cart</Link>
    </nav>
  )
}

export default Header