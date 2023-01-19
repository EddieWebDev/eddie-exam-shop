import { useMutation } from "@tanstack/react-query";
import { login } from "../Auth";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useLogin = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return useMutation(login, {
    onSuccess: (data) => {
      setCurrentUser(data);
      navigate("/");
    },
  });
};
