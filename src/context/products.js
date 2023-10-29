import { createContext, useState } from "react";
import axios from "axios";
import {fetchProductsApi, createProductApi, editProductApi, deleteProductApi} from "../api/index"

const ProductContext = createContext()

function Provider({children}) {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const response = await fetchProductsApi()
    setProducts(response.data)
  }
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

  const valueToShare = {
    products,
    onCreateProduct,
    onDeleteProduct,
    editProductById,
    fetchProducts
  }
  return (
    <ProductContext.Provider value={valueToShare}>
      {children}
    </ProductContext.Provider>
  );
}

export { Provider };
export default ProductContext;