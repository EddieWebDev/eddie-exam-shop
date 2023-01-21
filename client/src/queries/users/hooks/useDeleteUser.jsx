import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../Users";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
      queryClient.invalidateQueries({ queryKey: ["searched-user"] });
    },
  });
};
