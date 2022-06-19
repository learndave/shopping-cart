import React from "react";
import {FaShoppingCart} from "react-icons/fa";

import "./CartNavItem.css";
import CartCounter from "./CartCounter";


const CartNavItem = () => {
    return (
        <div className="cart">
            <FaShoppingCart className="cart-icon"/>
            <CartCounter/>
        </div>
    );
};

export default CartNavItem