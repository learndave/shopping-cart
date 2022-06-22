import React from "react";
import {BsCart2} from "react-icons/bs";

import "./Cart.css";
import CartCounter from "./CartCounter";


const CartNavItem = () => {
    return (
        <div className="cart">
            <BsCart2 className="cart-icon"/>
            <CartCounter/>
        </div>
    );
};

export default CartNavItem