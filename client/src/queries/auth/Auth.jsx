import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const login = async (loginCredentials) => {
  const { data } = await authApi.post(`/api/auth/login`, loginCredentials);
  return data;
};

export const logout = async () => {
  await authApi.post(`/api/auth/logout`);
};

export const checkToken = async () => {
  const { data } = await authApi.post(`/api/auth/checktoken`);
  return data;
};

export const googleLogin = async (googleUser) => {
  const { data } = await authApi.post(`/api/auth/google/login`, googleUser);
  return data;
};
