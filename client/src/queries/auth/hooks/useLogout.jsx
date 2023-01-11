import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { logout } from "../Auth";

export const useLogout = () => {
  const {setUser} = useContext(UserContext)
  return useMutation(logout, {
    onSuccess: () => {
      setUser(null)
    }
  });
};