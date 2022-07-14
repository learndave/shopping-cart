import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

import Header from "./Header/Header";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import NoPage from "./Pages/NoPage";

import { Products } from "./Data/Products";
import { clearCart, addToCart, getCartLength, updateLocalStorage, getCartFromLocalStorage } from "./Classes/Cart"; 

function App() {
  let products = new Products;
  const [cart, setCart] = useState(getCartFromLocalStorage());
  const [rerender, setRerender] = useState(false);

  const AddToCart = (id) => {
    let newCart = {...cart};
    setCart(addToCart(newCart,id));
  }

  const ClearCart = () => {
    let newCart = clearCart();
    setCart(newCart);
  }

  useEffect(() => {
    setRerender(!rerender);
  },[cart])

  return (
    <div className="App">
      <Router>
        <Header cart={cart}/> 
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPage products={products} cart={cart} setCart={setCart} AddToCart={AddToCart}/>}/>
          <Route path="/cart" element={<CartPage products={products} cart={cart} setCart={setCart} AddToCart={AddToCart} ClearCart={ClearCart}/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
