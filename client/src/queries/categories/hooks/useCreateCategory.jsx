import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCategory } from "../Categories";

export const useCreateCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(createCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["category-by-id"] });
    },
  });
};
