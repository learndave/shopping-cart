import React from "react";
import { useState } from "react";
import {BsCart2} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Cart-Header.css";
import CartCounter from "./CartCounter";
import CartContent from "./CartContent";
import CartData from "../Data/CartData";

const CartNavItem = () => {
    let [cartList, setCartList] = useState(CartData);
    let cartLength = cartList.length; 
    console.log(cartLength)
    return (
        <Link to="/cart" className="cart">
            <nav className="cart-header">
                <BsCart2 className="cart-icon"/>
                {cartLength == 0 ? null : <CartCounter cartLength={cartLength}/>}
            </nav>
            <CartContent cartList={{cartList}}/>
        </Link>
    );
};

export default CartNavItem