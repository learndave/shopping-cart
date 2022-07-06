import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Products from './Products/Products';
import About from './About/About';
import Checkout from './Checkout/Checkout';
import Profile from './Profile/Profile';
import Cart from './Cart/Cart';
import ErrorPage from './ErrorPage/ErrorPage';
import Product from './Products/Product';
import ProductPage from "./Products/ProductPage";

import ProductsData from "./Data/ProductsData";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <div className='body'>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<Products/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/checkout" element={<Checkout/>}/>
              <Route path="/cart" element={<Cart/>}/>
              <Route path="/profile" element={<Profile/>}/>
              <Route path="*" element={<ErrorPage/>}/>
              {ProductsData.map(productItem => {
                return(
                  <Route path={`/products/${productItem.id}`} element={<ProductPage productItem={productItem}/>}/>
                )
              })}
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;