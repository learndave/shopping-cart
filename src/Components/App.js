import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';

import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Products from './Products/Products';
import About from './About/About';

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
            </Routes>
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;