import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllUsers = async () => {
  const response = await usersApi.get("/users");
  return response.data
};

export const getUserById = async (id) => {
  const response = await usersApi.get(`/user/${id}`);
  return response.data
};

export const createUser = async (newUser) => {
  await usersApi.post(`/user`, newUser);
};

export const updateUser = async (updatedUser) => {
  await usersApi.put(`/user`, updatedUser);
};

export const deleteUser = async (id) => {
  await usersApi.delete(`/user/${id}`);
};
