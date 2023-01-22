import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCategory } from "../Categories";

export const useDeleteCategory = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteCategory, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["categories"] });
      queryClient.invalidateQueries({ queryKey: ["category-by-id"] });
    },
  });
};
