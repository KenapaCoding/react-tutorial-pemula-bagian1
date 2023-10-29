import React, { useEffect } from 'react';
import ProductCreate from './components/ProductCreate.js';
import ProductList from './components/ProductList.js';
import './App.css';
import axios from 'axios';
import { useState } from 'react';

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await axios.get('http://localhost:3001/products')
    setProducts(response.data)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  const editProductById = async (id, data) => {
    const response = await axios.put(`http://localhost:3001/products/${id}`, data)
    const updatedProducts = products.map((prod) => {
      if (prod.id === id) {
        console.log({ ...prod, ...response.data });
        return { ...prod, ...response.data };
      }

      return prod;
    });
    setProducts(updatedProducts);
  };
  const onCreateProduct = async (product) => {
    const response = await axios.post('http://localhost:3001/products',product)
    setProducts([
      ...products,
      response.data
    ]);
    console.log(response)
  };
  const onDeleteProduct = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`)
    const updatedProducts = products.filter((prod) => {
      return prod.id !== id;
    });
    setProducts(updatedProducts);
  };

  return (
    <>
      <div className="app-title">Belanja Mobil</div>
      <ProductCreate onCreateProduct={onCreateProduct} />
      <ProductList
        onEditProduct={editProductById}
        products={products}
        onDeleteProduct={onDeleteProduct}
      />
    </>
  );
};

export default App;
