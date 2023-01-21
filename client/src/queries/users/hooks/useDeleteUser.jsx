import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../Users";
import { useNavigate } from "react-router-dom";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
      queryClient.invalidateQueries({ queryKey: ["searched-user"] });
      navigate("/admin");
    },
  });
};
