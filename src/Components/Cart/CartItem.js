import React from 'react'

const CartItem = (props) => {

    let cartItem = props.cartItem;

  return (
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
  )
}

export default CartItem