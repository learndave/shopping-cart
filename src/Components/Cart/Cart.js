import React from "react";
import {BsCart2} from "react-icons/bs";

import "./Cart.css";
import CartCounter from "./CartCounter";
import CartContent from "./CartContent";


const CartNavItem = () => {
    return (
        <a href="/cart" className="cart">
            <nav className="cart-header">
                <BsCart2 className="cart-icon"/>
                <CartCounter/>
            </nav>
            <CartContent/>
        </a>
    );
};

export default CartNavItem