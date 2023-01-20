import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteOrder } from "../Orders";

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["user-orders"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
    },
  });
};
