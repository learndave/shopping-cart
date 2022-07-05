import React from "react";
import { useState } from "react";
import {BsTrash} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./CartContent.css";

const CartContent = (props) => {

    let cartList = props.cartList;
    
    if (cartList.length == 0) {
        return (
            <div className="cart-content-container">
                <h4 className="cart-content-title">Cart</h4>
                <ul className="cart-content-list">
                    {cartList.map(cartItem => {
                        return (
                            <li className={`${cartItem.id} cart-item cart-item`}>
                                <div className="cart-item-title">{cartItem.title}</div>
                                <div className="cart-item-cost-quantity">{`$${cartItem.cost} × ${cartItem.quantity}`}</div>
                                <div className="cart-item-total-cost">{`$${cartItem.cost * cartItem.quantity}`}</div>
                                <BsTrash className="cart-item-delete"/>
                            </li>
                        )
                    })}
                </ul>
                <Link to="/checkout" className="cart-content-checkout-button">Checkout</Link>
            </div>
        );
    } else {
       return (
        <div className="cart-content-container">
            It seems you haven't filled your cart yet.
        </div>
       )
    }
};

export default CartContent;