import axios from "axios";

export const fetchProductsApi = async () => {
    const response = await axios.get('http://localhost:3001/products')
    return response
}

export const createProductApi = async (data) => {
    const response = await axios.post(`http://localhost:3001/products`, data)
    return response
}
export const editProductApi = async (id, data) => {
    const response = await axios.put(`http://localhost:3001/products/${id}`, data)
    return response
}
export const deleteProductApi = async (id) => {
    await axios.delete(`http://localhost:3001/products/${id}`)
    
}