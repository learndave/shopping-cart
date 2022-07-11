import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./Header/Header";
import ProductsPage from "./Pages/ProductsPage";
import HomePage from "./Pages/HomePage";
import CartPage from "./Pages/CartPage";


function App() {


  return (
    <div className="App">
      <Router>
        <Header/> 
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
