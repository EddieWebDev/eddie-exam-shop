import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:3000"
})

export const getAllUsers = async () => {
  const response = await usersApi.get("/users");
  return response.data;
};

export const getUserById = async (id) => {
  const response = await usersApi.get(`/user/${id}`);
  return response.data;
};

export const createUser = async (newUser) => {
  const response = await usersApi.post(`/user`, newUser);
  return response.data;
};

export const updateUser = async (updatedUser) => {
  const response = await usersApi.put(`/user`, updatedUser);
  return response.data;
};

export const deleteUser = async (id) => {
  console.log(id)
  const response = await usersApi.delete(`/user/${id}`);
  return response.data;
};