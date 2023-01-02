import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteUser } from "../Users";

export const useDeleteUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id) => deleteUser(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
    },
  });
};
