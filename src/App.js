import React, { useEffect } from 'react';
import ProductCreate from './components/ProductCreate.js';
import ProductList from './components/ProductList.js';
import './App.css';
import { useState } from 'react';
import { createProductApi, deleteProductApi, editProductApi, fetchProductsApi } from './api';

const App = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetchProductsApi()
    setProducts(response.data)
  }
  useEffect(() => {
    fetchProducts()
  }, [])
  const editProductById = async (id, data) => {
    const response = await editProductApi(id,data)
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
    const response = await createProductApi(product)
    setProducts([
      ...products,
      response.data
    ]);
    console.log(response)
  };
  const onDeleteProduct = async (id) => {
    await deleteProductApi(id)
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
