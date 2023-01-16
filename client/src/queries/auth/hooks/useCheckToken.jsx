import { useMutation } from "@tanstack/react-query";
import { checkToken } from "../Auth";
import { useContext } from "react";
import { UserContext } from "../../../context/UserContext";

export const useCheckToken = () => {
  const { setCurrentUser, removeCurrentUser } = useContext(UserContext);
  return useMutation(checkToken, {
    onSuccess: (data) => {
      if (!data) {
        removeCurrentUser();
      } else setCurrentUser(data);
    },
  });
};
