import React from 'react';
import ProductCard from './ProductCard';
import { Products } from '../data/product.js';

const ProductList = () => {
  return (
    <div className="cards">
      {Products.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default ProductList;
