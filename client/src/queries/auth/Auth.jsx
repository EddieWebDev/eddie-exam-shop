import axios from "axios";

const authApi = axios.create({
  baseURL: "http://localhost:3000",
});

export const login = async (loginCredentials) => {
    await authApi.post(`/api/login`, loginCredentials);
};