import { useMutation } from "@tanstack/react-query";
import { login } from "../Auth";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export const useLogin = () => {
  const { setUser } = useContext(UserContext);
  return useMutation(login, {
    onSuccess: (data) => {
      console.log(data)
      setUser(data);
    },
  });
};
