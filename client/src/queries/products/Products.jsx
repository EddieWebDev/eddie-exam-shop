import axios from "axios";

const productsApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllProducts = async () => {
  const response = await productsApi.get("/api/products");
  return response.data;
};

export const getProductById = async (id) => {
  const response = await productsApi.get(`/api/products/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await productsApi.get(`/api/products/category/${category}`);
  return response.data;
};

export const createProduct = async (newProduct) => {
  await productsApi.post(`/api/products`, newProduct);
};

export const updateProduct = async (updatedProduct) => {
  const { id } = updatedProduct;
  await productsApi.put(`/api/products/${id}`, updatedProduct);
};

export const deleteProduct = async (id) => {
  await productsApi.delete(`/api/products/${id}`);
};

export const searchProduct = async (searchWord) => {
  const response = await productsApi.get(`/api/products/search/${searchWord}`);
  return response.data;
};
