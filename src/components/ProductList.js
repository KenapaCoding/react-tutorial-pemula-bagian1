import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import ProductContext from '../context/products';

const ProductList = () => {
  const {products} = useContext(ProductContext)
  return (
    <div className="cards">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default ProductList;
