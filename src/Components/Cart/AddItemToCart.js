const AddItemToCart = (productId) => {
    // productId = productId.toString();
    let cartItems = JSON.parse(window.localStorage.getItem("cart"));

    const isInCartItems = (productId, cartItems) => {
        for (const id in cartItems) {
            if (id == productId) {
                return true;
            } else {
                return false;
            }
        }
    };
    
    // console.log(JSON.stringify(cartItems));

    if (!isInCartItems(productId, cartItems)) {
        cartItems[productId] = 1; 
    } else {
        // console.log("already in cart")
        cartItems[productId] = cartItems[productId] + 1;
    }

    window.localStorage.setItem("cart", JSON.stringify(cartItems));
    console.log(JSON.parse(window.localStorage.getItem("cart")));
}

export default AddItemToCart;