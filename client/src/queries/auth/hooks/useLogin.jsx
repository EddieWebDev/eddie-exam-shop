import { useMutation } from "@tanstack/react-query";
import { login } from "../Auth";

export const useLogin = () => {
  return useMutation(login);
};