import React from "react";

const CartCounter = () => {
    let cartCount = 99;

    return (
        <div className="cartcount-icon" style={{display: cartCount > 0 ? "block" : "none"}}>
            {cartCount}
        </div>
    );
};

export default CartCounter;