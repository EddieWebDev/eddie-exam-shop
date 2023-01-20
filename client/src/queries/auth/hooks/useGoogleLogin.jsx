import { useMutation } from "@tanstack/react-query";
import { googleLogin } from "../Auth";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";
import { useNavigate } from "react-router-dom";

export const useGoogleLogin = () => {
  const { setCurrentUser } = useContext(UserContext);
  const navigate = useNavigate();

  return useMutation(googleLogin, {
    onSuccess: (data) => {
      setCurrentUser(data);
      navigate("/");
    },
  });
};
