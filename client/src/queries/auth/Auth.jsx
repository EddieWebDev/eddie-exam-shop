import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const login = async (loginCredentials) => {
    await authApi.post(`/api/auth/login`, loginCredentials);
};

export const logout = async () => {
  await authApi.post(`/api/auth/logout`);
};