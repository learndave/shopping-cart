import React from "react";

import "./CartContent.css";

const CartContent = () => {
    return (
        <div className="cart-content-container">
            <h4 className="cart-content-title">Cart</h4>
            <ul className="cart-content-list">
                <li className="cartItem">
                    Item 1
                </li>
                <li className="cartItem">
                    2
                </li>
                <li className="cartItem">
                    3
                </li>
            </ul>
            <button className="cart-content-checkout-button">Checkout</button>
        </div>
    );
};

export default CartContent;