import { useMutation } from "@tanstack/react-query";
import { login } from "../Auth";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export const useLogin = () => {
  const { setCurrentUser } = useContext(UserContext);
  return useMutation(login, {
    onSuccess: (data) => {
      setCurrentUser(data);
    },
  });
};
