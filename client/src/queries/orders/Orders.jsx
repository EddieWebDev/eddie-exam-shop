import axios from "axios";

const ordersApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllOrders = async () => {
  const response = await ordersApi.get("/api/orders");
  return response.data;
};

export const getOrderById = async (id) => {
  const response = await ordersApi.get(`/api/orders/${id}`);
  return response.data;
};

export const getUserOrders = async (id) => {
  const response = await ordersApi.get(`/api/orders/userorders/${id}`);
  return response.data;
};

export const createOrder = async (orderData) => {
  const { id, cart, total } = orderData;
  const newOrder = await ordersApi.post(`/api/orders/${id}`, { cart, total });
  return newOrder;
};

export const updateOrderStatus = async (id, updatedStatus) => {
  await ordersApi.patch(`/api/orders/${id}`, updatedStatus);
};

export const deleteOrder = async (id) => {
  await ordersApi.delete(`/api/orders/${id}`);
};
