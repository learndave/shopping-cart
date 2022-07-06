import React from "react";
import {BsCart2} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./Cart-Header.css";
import CartCounter from "./CartCounter";
import CartContent from "./CartContent";
import CartData from "../Data/CartData";



const CartNavItem = () => {
    window.localStorage.clear();    
    (()=> {
        if (!window.localStorage.hasOwnProperty("cart")) {
            window.localStorage.setItem("cart",JSON.stringify(new Object()))
        }
    })();

    let cartList = () => {
        window.localStorage.getItem("cart");    
    };

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