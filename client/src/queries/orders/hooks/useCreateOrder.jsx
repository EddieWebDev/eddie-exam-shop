import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createOrder } from "../Orders";

export const useCreateOrder = (cart) => {
  const queryClient = useQueryClient();

  return useMutation(createOrder,{
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    }},
  );
};
