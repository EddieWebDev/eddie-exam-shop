import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateOrder } from "../Orders";

export const useUpdateOrder = () => {
  const queryClient = useQueryClient();

  return useMutation(updateOrder, {
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
      queryClient.invalidateQueries({ queryKey: ["user-orders"] });
      queryClient.invalidateQueries({ queryKey: ["user-by-id"] });
    },
  });
};
