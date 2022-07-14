export const getCartFromLocalStorage = () => {
    // window.localStorage.setItem('cart',JSON.stringify({}))
    return JSON.parse(window.localStorage.getItem('cart'));
}

export const updateLocalStorage = (cart) => {
    // console.log(cart);
    window.localStorage.setItem('cart',JSON.stringify(cart))
}

export const getCartLength = (cart) => {
    let cartLength = 0;
    if (!(typeof(cart) === "undefined" || Object.keys(cart).length == 0)) {
        cartLength = Object.values(cart).reduce((prev,curr) => prev + curr);
    }
    return cartLength;
}

export const addToCart = (cart,id) => {
    if (cart.hasOwnProperty(id)) {
        cart[id] = cart[id] + 1;
    } else {
        cart[id] = 1;
    };

    updateLocalStorage(cart);

    return cart;
}


export const clearCart = (cart) => {
    cart = {};
    updateLocalStorage(cart);
    return cart;
}