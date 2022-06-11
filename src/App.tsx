import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import Cart from "./components/Cart";
import Product from "./components/Product";
import Category from "./components/Category";

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
                <Route path="/" element={<Category />} />
                <Route path="product" element={<Product />} />
                <Route path="cart" element={<Cart />} />
        </Routes>
    </div>
  );
}

export default App;
