export class Cart {
    constructor() {
        this.cart = {"b":1};

        this.addToCart = this.addToCart.bind(this);
        this.getCartData = this.getCartData.bind(this);
        this.getCartLength = this.getCartLength.bind(this);
        this.updateCartLength = this.updateCartLength.bind(this);
        this.updateCartLength();
    }

    updateLocalStorage = () => {
        window.localStorage.setItem('cart',JSON.stringify(this.cart))
    }

    updateCartLength = () => {
        // console.log(this.cart);
        if (typeof(this.cart) === "undefined" || Object.keys(this.cart).length == 0) {
            // console.log("cart is empty");
            this.cartLength = 0;
        } else {
            // console.log("cart has value");
            this.cartLength = Object.values(this.cart).reduce((prev,curr) => prev + curr);
        }
    }

    getCartLength = () => {
        return this.cartLength;
    }

    getCartData = () => {
        this.cart = JSON.parse(window.localStorage.getItem("cart"));
        return this.cart;
    }

    addToCart = (id) => {
        if (this.cart.hasOwnProperty(id)) {
            this.cart[id] = this.cart[id] + 1;
        } else {
            this.cart[id] = 1;
        };

        this.updateLocalStorage();
        this.updateCartLength();
    }

    clearCart = () => {
        this.cart = {};
        this.updateLocalStorage();
    }
};