import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import Shop from './screens/Shop';
import Cart from './screens/Cart';
import { useEffect, useReducer } from 'react';
import axios from 'axios';

function productsReducer (state, action) {
  localStorage.setItem('products', JSON.stringify(state));
}

function cartReducer (state, action) {
  localStorage.setItem('cart', JSON.stringify(state));
}

function App() {
  //var [products, dispatchProducts] = useReducer(productsReducer, []);
  //var [cart, dispatchCart] = useReducer(cartReducer, []);
  let products = [];

  try{
    products = axios.get(`/api/products/`);
  } catch (error) {
    products = [];
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Header />

        <Routes> 
          <Route path="/" element={<Shop products={products}/>}/> 
          <Route path="/cart" element={<Cart products={products}/>}/> 
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
