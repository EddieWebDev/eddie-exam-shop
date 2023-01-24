import axios from "axios";

const usersApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const getAllUsers = async () => {
  const response = await usersApi.get("/api/users");
  return response.data;
};

export const getUserById = async (id) => {
  const response = await usersApi.get(`/api/users/${id}`);
  return response.data;
};

export const createUser = async (newUser) => {
  await usersApi.post(`/api/users`, newUser);
};

export const updateUser = async (updatedUser) => {
  const { id } = updatedUser;
  await usersApi.put(`/api/users/${id}`, updatedUser);
};

export const deleteUser = async (id) => {
  await usersApi.delete(`/api/users/${id}`);
};

export const searchUser = async (searchWord) => {
  const response = await usersApi.get(`/api/users/search/${searchWord}`);
  return response.data;
};
