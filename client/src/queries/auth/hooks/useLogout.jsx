import { useMutation } from "@tanstack/react-query";
import { logout } from "../Auth";

export const useLogout = () => {
  return useMutation(logout);
};