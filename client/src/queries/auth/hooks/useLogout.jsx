import { useMutation } from "@tanstack/react-query";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";
import { logout } from "../Auth";

export const useLogout = () => {
  const { removeCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return useMutation(logout, {
    onSuccess: () => {
      removeCurrentUser();
      navigate("/");
    },
  });
};
