import React from "react";
import { useState } from "react";
import {BsTrash} from "react-icons/bs";
import { Link } from "react-router-dom";

import "./CartContent.css";

const CartContent = () => {
    let [cartList, setCartList] = useState([
        {
            id: 1,
            title: "Item 1",
            cost: 125.00,
            quantity: 3,
        },
        {
            id: 2,
            title: "Item 2",
            cost: 325.00,
            quantity: 4,
        },
    ]);
    return (
        <div className="cart-content-container">
            <h4 className="cart-content-title">Cart</h4>
            <ul className="cart-content-list">
                {cartList.map(cartItem => {
                    return (
                        <li className={`cart-item cart-item-${cartItem.id}`}>
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
};

export default CartContent;