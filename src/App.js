import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";
import NoPage from "./Pages/NoPage";

import { Products } from "./Data/Products";
import { Cart } from "./Classes/Cart";

function App() {

  let products = new Products;
  let cart = new Cart;

  return (
    <div className="App">
      <Router>
        <Header/> 
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPage products={products} cart={cart}/>}/>
          <Route path="/cart" element={<CartPage products={products} cart={cart}/>}/>
          <Route path="*" element={<NoPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
