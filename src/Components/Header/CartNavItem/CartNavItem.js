import React from "react";

import {FaShoppingCart} from "react-icons/fa";
import "./CartNavItem.css";

const CartNavItem = () => {
    return (
        <div className="cart">
            <FaShoppingCart className="cart-icon"/>
        </div>
    );
};

export default CartNavItem