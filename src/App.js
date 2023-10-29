import React, { useEffect } from 'react';
import ProductCreate from './components/ProductCreate.js';
import ProductList from './components/ProductList.js';
import './App.css';
import { useContext } from 'react';
import ProductContext from './context/products.js';

const App = () => { 
  const {fetchProducts}= useContext(ProductContext)
  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate/>
      <ProductList/>
    </>
  );
};

export default App;
