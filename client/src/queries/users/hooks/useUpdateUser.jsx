import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../Users";

export const useUpdateUser = (updatedUser) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (updatedUser) => updateUser(updatedUser),
    enabled: !!updatedUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
    },
  });
};
