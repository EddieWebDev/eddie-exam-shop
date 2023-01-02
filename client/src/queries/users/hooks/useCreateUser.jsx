import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser } from "../Users";

export const useCreateUser = (newUser) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (newUser) => createUser(newUser),
    enabled: !!newUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};
