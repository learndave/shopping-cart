import React from "react";

import "./Header.css";
import CartNavItem from "./CartNavItem/CartNavItem";

const Header = () => {
    return (
        <div className="header">
            <a href="/" className="app-title header-logo">
                Cabs Shopping Mall
            </a>
            <ul className="nav-list">
                <li className="product nav-item">
                    <a href="/products">
                        Products
                    </a>
                </li>
                <li className="cart nav-item">
                    <a href="/cart">
                       <CartNavItem/>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Header;