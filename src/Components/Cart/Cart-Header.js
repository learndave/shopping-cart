import React from "react";
import {BsCart2} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Cart-Header.css";
import CartCounter from "./CartCounter";
import CartContent from "./CartContent";


const CartNavItem = () => {
    return (
        <Link to="/cart" className="cart">
            <nav className="cart-header">
                <BsCart2 className="cart-icon"/>
                <CartCounter/>
            </nav>
            <CartContent/>
        </Link>
    );
};

export default CartNavItem