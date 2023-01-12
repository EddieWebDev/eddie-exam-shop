import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateUser } from "../Users";

export const useUpdateUser = () => {
  const queryClient = useQueryClient();

  return useMutation(updateUser, { 
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
    },
  });
};
